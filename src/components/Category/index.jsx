import Link from "next/link";
const Category = ({ api, link }) => {
  return (
    <div className="border mt-5 mb-5 capitalize p-1 rounded-lg">
      <h1 className="p-2 font-bold text-green-600">Category</h1>
      <hr />
      <div className="flex flex-col mt-2 gap-2 mx-3">
        {api?.map((data) => {
          return (
            <Link href={`${link}/${data}`} key={data}>
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
