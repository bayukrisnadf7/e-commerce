import { getProductApi } from "@/libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import CarouselView from "@/components/Utilities/Carousel";
import Category from "@/components/Category";
const Page = async ({ params }) => {
  const { category } = params;
  const getCategoryProduct = await getProductApi(
    `products/category/${category}`
  );
  const allCategories = await getProductApi("products/category-list");
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="flex mb-5 mx-20 gap-5">
        <div className="w-1/4">
          <Category api={allCategories} link={"../category"} />
        </div>
        <div className="w-3/4 border mt-5">
          <div className="">
            <p className="p-3 font-bold text-green-600">{`Categori ${category}`}</p>
            <hr />
          </div>
          <div className="grid grid-cols-5 p-3 gap-5 h-full">
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
                  <div className="mt-2 mx-2">
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
        </div>
      </div>
    </>
  );
};
export default Page;
