import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const Product = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 justify-center gap-5">
      {api.products.map((data) => {
        return (
          <div className="border-2 rounded-xl max-w-40 bg-slate-50" key={data.id}>
            <Link href={`products/${data.id}`}>
              <Image
                src={data.images[0]}
                width={150}
                height={150}
                className="images max-w-40 max-h-32 object-cover"
                alt={data.title}
              />
              <div className=" p-3">
                <p className="text-sm font-bold">{data.title.split(" ").slice(0, 2).join(" ")}</p>
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
  );
};
export default Product;
