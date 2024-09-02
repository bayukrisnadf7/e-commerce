import { getProductApi } from "@/libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Page = async ({ params }) => {
  const { category } = params;
  const getCategoryProduct = await getProductApi(
    `products/category/${category}`
  );
  
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mx-20 gap-5 justify-center mt-5 mb-5">
        {getCategoryProduct.products.map((data) => {
          return (
            <div
              className="border-2 rounded-xl min-w-40 bg-slate-50 flex justify-center p-3"
              key={data.id}
            >
              <Link href={`../products/${data.id}`}>
                <Image
                  src={data.images[0]}
                  width={250}
                  height={250}
                  className="images max-w-40 max-h-32 object-cover"
                  alt={data.title}
                />
                <div className="mt-2">
                  <p className="text-sm font-bold">
                    {data.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <p className="text-sm">{`$ ${data.price}`}</p>
                  <p className="bg-green-200 font-bold text-green-800 max-w-max p-1 rounded-md text-xs">{` Discount ${data.discountPercentage} %`}</p>
                  <p className="flex items-center text-sm gap-1">
                    <FaStar size={16} className="text-yellow-400" />
                    {data.rating}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Page;
