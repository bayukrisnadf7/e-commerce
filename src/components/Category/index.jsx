import ImagesCategory from "./Images";
import Link from "next/link";
const Category = ({ api }) => {
  return (
    <div className="border mt-5 mb-5 capitalize p-1 rounded-lg">
      <h1 className="p-3">Category</h1>
      <hr />
      <div className="grid grid-cols-6 mt-2 gap-3 mx-3">
        {api.map((data) => {
          return (
            <Link href={`category/${data}`} key={data}>
              <div className="" key={data}>
                <p className="text-sm hover:text-green-600">{data}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
