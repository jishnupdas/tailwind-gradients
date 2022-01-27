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
          <div className="container max-w-full p-4 bg-white rounded-lg shadow md:py-8">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <DetailsCard title={"Details"}>
                <DetailRow title={"Order id"} value={data.id} />
                <DetailRow
                  title={"Order Date"}
                  value={new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "full",
                  }).format(Date.parse(data.order_time))}
                />
                <DetailRow
                  title={"Status"}
                  value={
                    <div className={`px-1 ${ColorCode(data.status)}`}>
                      {data.status}
                    </div>
                  }
                />
                <DetailRow
                  title={"Last updated"}
                  value={getFormattedDate(new Date(data.order_time))}
                />
              </DetailsCard>

              <DetailsCard title={"Shop"} link={`/shops/${data.shop.id}`}>
                <DetailRow title={"Shop Name"} value={data.shop.name} />
                <DetailRow
                  title={"Address"}
                  value={data.shop.address.address1}
                />
                <DetailRow title={"City"} value={data.shop.address.city} />
                <DetailRow title={"Contact"} value={data.shop.contact} />
              </DetailsCard>

              <DetailsCard title={"Customer"}>
                {/* <DetailRow title={"Name"} value={data.to_address.full_name} /> */}
                <DetailRow title={"Address"} value={data.to_address.address1} />
                <DetailRow
                  title={"Locality"}
                  value={data.to_address.address2}
                />
                <DetailRow title={"City"} value={data.to_address.city} />
                <DetailRow title={"Contact"} value={data.to_address.phone} />
              </DetailsCard>

              {data.agent && (
                <DetailsCard
                  title={"Delivery agent"}
                  link={`/deliveryboys/${data.agent}`}
                >
                  <DetailRow
                    title={"Agent name"}
                    value={deliveryagent?.data?.account?.username}
                  />
                  <DetailRow
                    title={"Phone"}
                    value={deliveryagent?.data?.account?.phone}
                  />
                </DetailsCard>
              )}
            </div>
          </div>
        </div>
      }
    >
      <div className="container px-4 py-6 mx-auto bg-white border-t-8 border-b-8 border-green-400 rounded-lg">
        <div className="pb-3 border-b">
          <div className="flex justify-between cursor-pointer">
            <h3 className="pb-4 font-bold tracking-wider uppercase text-l">
              Items
            </h3>
          </div>
          <Items items={data} />
        </div>
        <div className="flex items-start py-2 -mx-1 border-b">
          <div className="flex-1 px-1">
            <p className="text-sm font-bold tracking-wide text-gray-800 uppercase">
              Payment Status
            </p>
            {data.is_paid === true ? (
              <span className="px-2 py-1 font-semibold leading-tight text-green-600 bg-green-300 rounded-sm">
                completed
              </span>
            ) : (
              <span className="px-2 py-1 font-semibold leading-tight text-red-600 bg-red-300 rounded-sm">
                pending
              </span>
            )}
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

const DetailsCard = ({ title, link, children }) => {
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
      {children}
    </div>
  );
};

const DetailRow = ({ title, value }) => {
  return (
    <div className="flex flex-col py-2">
      <div className="pr-2 text-xs tracking-wide text-gray-800 uppercase">
        {title}
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
};
