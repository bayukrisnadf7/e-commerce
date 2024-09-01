import ImagesCategory from "./Images";
import Link from "next/link";
const Category = ({ api }) => {
  return (
    <div className="border mt-5 mb-5 capitalize p-1 rounded-lg">
      <h1>Category</h1>
      <hr />
      <div className="grid grid-cols-6 mt-3 text-base">
        <Link href={`products?category=${api[0]}`}></Link>
      </div>
    </div>
  );
};
export default Category;
