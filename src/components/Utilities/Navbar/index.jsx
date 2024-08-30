import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="text-3xl bg-white h-16  flex items-center mx-5 justify-between">
      <Link href="/">
        {" "}
        <h1 className="font-bold text-green-600">Martpedia</h1>{" "}
      </Link>

      <InputSearch />
      <div className="flex gap-3">
        <button className="border text-green-600 border-green-600 text-sm p-2 rounded-lg font-bold w-24">
          Masuk
        </button>
        <button className="bg-green-600 text-sm text-white p-2 rounded-lg font-bold w-24">
          Daftar
        </button>
      </div>
    </div>
  );
};
export default Navbar;
