import ColorCode from "../../components/orders/ColorCode";
import GetDeliveryAgent from "../../components/delveryboys/GetDeliveryAgent";
import GetOrderid from "../../components/orders/getOrderId";
import Items from "../../components/items/items";
import Layout from "../../components/layout/layout";
import getFormattedDate from "../../components/utils/getFomattedDate";
import { useRouter } from "next/router";

const OrderDetails = () => {
  const { query } = useRouter();
  const router = useRouter();
  const order = GetOrderid({ queryParams: query.orderid });
  const { data, status, error } = order;
  const deliveryagent = GetDeliveryAgent({ id: query.deliveryboyid });

  if (status !== "success") return <Layout>"loading..."</Layout>;

  return (
    <Layout
      header={
        <div className="px-3 mb-4 -mt-24 md:px-8">
          <div className="w-full p-4 bg-white rounded-lg shadow md:py-6">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <DetailsCard
                title={"Details"}
                data={{
                  "Order id": data.id,
                  "Order Date": new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "full",
                  }).format(Date.parse(data.order_time)),
                  Status: (
                    <div className={`px-1 ${ColorCode(data.status)}`}>
                      {data.status}
                    </div>
                  ),
                  "Last updated": getFormattedDate(new Date(data.order_time)),
                }}
              />

              <DetailsCard
                title={"Shop"}
                link={`/shops/${data.shop.id}`}
                data={{
                  "Shop Name": data.shop.name,
                  Address: data.shop.address.address1,
                  City: data.shop.address.city,
                  Contact: data.shop.contact,
                }}
              />

              <DetailsCard
                title={"Customer"}
                data={{
                  Address: data.to_address.address1,
                  Locality: data.to_address.address2,
                  City: data.to_address.city,
                  Contact: data.to_address.phone,
                }}
              />

              {data.agent && (
                <DetailsCard
                  title={"Delivery"}
                  link={`/deliveryboys/${data.agent}`}
                  data={{
                    "Agent name": deliveryagent?.data?.account?.username,
                    Phone: deliveryagent?.data?.account?.phone,
                    Distance: `${data?.distance?.toFixed(2)} KM`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      }
    >
      <div className="w-full px-4 py-6 mx-auto bg-white border-t-8 border-b-8 border-green-400 rounded-lg">
        <div className="pb-3 border-b">
          <Items items={data} />
        </div>
        <div className="flex items-start py-4 -mx-1 border-b">
          <div className="flex-1 px-1">
            <p className="text-sm font-bold tracking-wide text-gray-800 uppercase">
              Payment Status
            </p>

            <span
              className={`px-2 py-1 font-semibold leading-tight rounded-sm ${
                data.is_paid === true
                  ? "text-green-600 bg-green-300"
                  : "text-red-600 bg-red-300"
              }`}
            >
              {data.is_paid === true ? "completed" : "pending"}
            </span>
          </div>
          <div className="flex-1 px-1">
            <p className="text-sm font-bold tracking-wide text-gray-800 uppercase">
              Amount
            </p>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(data.amount - data.discount + data.service_charge)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;

const DetailsCard = ({ title, link, children, data }) => {
  const router = useRouter();
  return (
    <div
      className={`w-full p-3 overflow-hidden rounded-lg bg-gray-50/50 ${
        link && "cursor-pointer hover:shadow hover:bg-gray-50/20"
      }`}
      onClick={() => {
        link && router.push(link);
      }}
    >
      <div className="px-3 py-2 -mx-3 -mt-3 text-xl font-bold text-gray-800 uppercase bg-gray-100/50">
        {title}
      </div>
      <div className="select-none">
        {children}
        {Object.entries(data).map(([key, value], index) => (
          <DetailRow key={index} title={key} value={value} />
        ))}
      </div>
    </div>
  );
};

const DetailRow = ({ title, value }) => {
  return (
    <div className="flex flex-col py-2">
      <div className="pr-2 text-xs tracking-wide text-gray-700 uppercase">
        {title}
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
};
