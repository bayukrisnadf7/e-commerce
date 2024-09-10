import Navbar from "@/components/Utilities/Navbar";
import { getProductApi } from "@/libs/api";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
const Page = async ({ params }) => {
  const { id } = params;
  const detailProduct = await getProductApi(`products/${id}`);
  const afterDiscount =
    detailProduct.price -
    (detailProduct.price * detailProduct.discountPercentage) / 100;
  return (
    <>
      <Navbar />
      <hr />
      <div className="flex md:flex-row flex-col md:mx-16 mx-3 mt-5 gap-5 mb-5">
        {/* left content start */}
        <div className="md:w-4/5">
          <div className="flex md:flex-row flex-col shadow-lg border p-3 rounded-xl">
            {/* image start */}
            <div className="flex flex-col md:w-1/2">
              <Image
                src={detailProduct.images[0]}
                alt={detailProduct.title}
                width={300}
                height={300}
                className="md:w-72 w-full object-cover border rounded-xl "
              />
              <div className="flex gap-3 mt-5">
                <Image
                  src={detailProduct.images[0]}
                  alt={detailProduct.title}
                  width={84}
                  height={100}
                  className="object-cover border rounded-xl"
                />
                <Image
                  src={detailProduct.images[0]}
                  alt={detailProduct.title}
                  width={84}
                  height={100}
                  className="object-cover border rounded-xl "
                />
                <Image
                  src={detailProduct.images[0]}
                  alt={detailProduct.title}
                  width={84}
                  height={96}
                  className="object-cover border rounded-xl "
                />
              </div>
            </div>
            {/* image end */}

            {/* description start */}
            <div className="flex flex-col w-full md:mt-0 mt-3">
              <h1 className="text-3xl font-bold">{detailProduct.title}</h1>
              <div className="flex gap-3 text-sm mt-2">
                <p>{`Selling total : 8k+`}</p>
                <p className="flex gap-1">
                  {" "}
                  <FaStar size={16} className="text-yellow-400" />{" "}
                  {detailProduct.rating}
                </p>
              </div>
              <div className="mt-3">
                <p className="text-3xl font-bold">{` $ ${afterDiscount.toFixed(
                  2
                )}`}</p>
                <div className="flex gap-3 mt-2">
                  <p className="bg-green-200 p-1 text-xs rounded-md text-green-800 font-bold ">{`${detailProduct.discountPercentage} %`}</p>
                  <p className="line-through text-slate-400">{` $ ${detailProduct.price}`}</p>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-green-600 font-bold">Detail</h2>
                <div className="text-sm">
                  <p>{`Brand : ${detailProduct.brand}`}</p>
                  <p>{`Sku : ${detailProduct.sku}`}</p>
                  <p>{`Weight : ${detailProduct.weight}`}</p>
                  <p>{`Status : ${detailProduct.availabilityStatus}`}</p>
                </div>
                <p className="mt-3">{detailProduct.description}</p>
                <hr />
                <div className="flex items-center gap-3 mt-3 ">
                  <CiUser
                    size={40}
                    className="text-black bg-slate-300 p-2 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">{`${detailProduct.brand} Official Store`}</p>
                    <div className="flex items-center gap-1">
                      <CiStar />
                      <p>4.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* description end */}
          </div>
          {/* reviews start */}
          <div className="flex flex-col mt-5 shadow-lg border p-5 rounded-xl mb-5">
            <h1>Reviews</h1>
            <hr />
            {detailProduct.reviews.map((data) => {
              return (
                <div className="flex items-center gap-5 mt-3 w-full">
                  <FaUser
                    size={40}
                    className="text-green-600 bg-slate-300 p-2 rounded-full"
                  />
                  <div className="flex flex-col w-full text-sm">
                    {data.rating === 1 ? (
                      <FaStar size={16} className="text-yellow-400" />
                    ) : null}
                    {data.rating === 2 ? (
                      <div className="flex">
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                      </div>
                    ) : null}
                    {data.rating === 3 ? (
                      <div className="flex">
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                      </div>
                    ) : null}
                    {data.rating === 4 ? (
                      <div className="flex">
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                      </div>
                    ) : null}
                    {data.rating === 5 ? (
                      <div className="flex">
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                        <FaStar size={16} className="text-yellow-400" />
                      </div>
                    ) : null}
                    <p>
                      {`${data.reviewerName.charAt(0)}${"*".repeat(
                        data.reviewerName.length - 2
                      )}${data.reviewerName.charAt(
                        data.reviewerName.length - 1
                      )}`}
                    </p>
                    <p>{data.comment}</p>
                    {/* <p>{data.reviewerEmail}</p> */}
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
          {/* reviews end */}
        </div>
        {/* left content end */}

        {/* right content start */}
        <div className="md:w-1/5">
          <div className="shadow-xl border rounded-lg p-3">
            <h1>Chart</h1>
            <div className="flex justify-between border border-green-600 text-lg p-2 rounded-lg mt-2">
              <button className="hover:text-green-600"> - </button>
              <p>1</p>
              <button className="hover:text-green-600"> + </button>
            </div>
            <p className="text-sm mt-2">{`Stock : ${detailProduct.stock}`}</p>
            <div className="flex justify-between mt-2">
              <p>Subtotal</p>
              <p className="font-bold">{`$ ${afterDiscount.toFixed(2)}`}</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <button className="bg-green-600 font-bold text-white p-2 rounded-lg w-full">
                + Keranjang
              </button>
              <button className="border border-green-600 font-bold text-green-600 p-2 rounded-lg w-full">
                Buy
              </button>
            </div>
          </div>
        </div>
        {/* right content end */}
      </div>
    </>
  );
};
export default Page;
