import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const Product = ({ api, title }) => {
  return (
    <>
      <div className="border p-1 rounded-xl">
        <h1 className="p-2 font-bold flex items-center text-green-600">
          {title}
        </h1>
        <hr />
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 mt-3 p-2">
          {api.products.map((data) => {
            return (
              <div
                className="border-2 rounded-xl min-w-40 bg-slate-50 flex justify-center p-3"
                key={data.id}
              >
                <Link href={`products/${data.id}`}>
                  <Image
                    src={data.images[0]}
                    width={250}
                    height={250}
                    className="images max-w-40 max-h-32 object-cover"
                    alt={data.title}
                  />
                  <div className="mt-2 mx-3">
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
    </>
  );
};
export default Product;
