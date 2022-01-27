import GetOrderid from "../../components/orders/getOrderId";
import GetTimeDiff from "../../components/utils/GetTimeDiff";
import Getdeliveryboys from "../../components/delveryboys/getdeliveryboys";
import Items from "../../components/items/items";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
const orderId = () => {
  const { query } = useRouter();
  const router = useRouter();
  const order = GetOrderid({ queryParams: query.orderid });
  const { data, status, error } = order;
  let params = {
    account: query.deliveryboyid,
  };

  const deliveryboy = Getdeliveryboys({ queryParams: params });
  if (status !== "success") {
    return <Layout>"loading..."</Layout>;
  }
  return (
    <Layout>
      <>
        <div className="h-2 border-t-8 border-green-400"></div>
        <div className="container px-4 py-6 mx-auto bg-white">
          <div className="flex justify-between">
            <h2 className="pb-2 mb-6 text-2xl font-bold tracking-wider uppercase">
              Order
            </h2>
          </div>
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col justify-between w-1/3 border-b">
              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Order No.
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="flex-1">{data.id}</div>
              </div>

              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Order Date
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="flex-1">
                  {new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "full",
                  }).format(Date.parse(data.order_time))}
                </div>
              </div>
              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Status
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="inline-flex px-2 font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                  {data.status}
                </div>
              </div>
              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Last Updated
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="flex-1">
                  {new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "full",
                    timeStyle: "short",
                  }).format(Date.parse(data.order_time))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-2/3 border-b">
              <div className="w-full mb-2 md:mb-0">
                <div className="items-center mb-2 md:mb-1 md:flex">
                  <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                    Shop Name
                  </div>
                  <span className="mr-4 md:block">:</span>
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => router.push(`/shops/${data.shop.id}`)}
                  >
                    {data.shop.name}
                  </div>
                </div>
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Shop Address:
                </div>
                <div className="flex flex-col">
                  <p className="">{data.shop.address.address1}</p>
                  <p className="">{data.shop.address.city}</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                    Phone.No:
                  </div>
                  <span>{data.shop.contact}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h3 className="pb-2 mb-6 font-bold tracking-wider uppercase text-l">
              Customer
            </h3>
          </div>
          <div className="flex flex-wrap justify-between mb-8 border-b">
            <div className="w-full mb-2 md:w-1/2 md:mb-0">
              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Name
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="flex-1">{data.to_address.full_name}</div>
              </div>
              <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                TO Address:
              </div>
              <div className="flex-1 md:ml-16">
                {data.to_address.address1},
                <br />
                {data.to_address.address2},<br />
                {data.to_address.city}.
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="items-center mb-2 md:mb-1 md:flex">
                <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                  Phone.No:
                </div>
                <span className="mr-4 md:block">:</span>
                <div className="flex-1">{data.to_address.phone}</div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => router.push(`/deliveryboys/${data.agent}`)}
          >
            <h3 className="pb-2 mb-6 font-bold tracking-wider uppercase text-l">
              Delivery Boy
            </h3>
          </div>
          {deliveryboy.status !== "success" ? (
            <div className="flex flex-wrap justify-between mb-8 border-b">
              Not Assigned
            </div>
          ) : (
            <>
              {deliveryboy.flatData.map((deliveryboys) => (
                <div
                  key={deliveryboys.account.first_name}
                  className="flex flex-wrap justify-between mb-8 border-b"
                >
                  <div className="items-center mb-2 md:mb-1 md:flex">
                    <div className="block w-2/3 text-sm font-bold tracking-wide text-gray-800 uppercase">
                      Agent Name
                    </div>
                    <span className="mr-4 md:block">:</span>
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={() => router.push(`/deliveryboys/${data.agent}`)}
                    >
                      {deliveryboys.account.first_name}
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="items-center mb-2 md:mb-1 md:flex">
                      <div className="block w-32 text-sm font-bold tracking-wide text-gray-800 uppercase">
                        Phone.No:
                      </div>
                      <span className="mr-4 md:block">:</span>
                      <div className="flex-1">
                        {" "}
                        {deliveryboys.account.phone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="p-3 border-b">
            <div className="flex justify-between cursor-pointer">
              <h3 className="pb-2 mb-6 font-bold tracking-wider uppercase text-l">
                Items
              </h3>
            </div>
            <Items items={data} />
          </div>
          <div className="flex items-start py-2 -mx-1 border-b">
            <div className="flex-1 px-1">
              <p className="text-sm font-bold tracking-wide text-gray-800 uppercase">
                Amount
              </p>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(data.amount - data.discount + data.service_charge)}
            </div>
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
          </div>
        </div>
        <div className="h-2 border-b-8 border-green-400"></div>
      </>
    </Layout>
  );
};

export default orderId;
