import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  return (
    <div className="relative">
        <input
          type="text"
          placeholder="Search...."
          className="border text-sm p-2 rounded-lg w-96"
        />
        <CiSearch size={27} className="absolute right-2 top-1/4"/>
    </div>
  );
};
export default InputSearch;
