"use client";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const InputSearch = () => {
  const searchReff = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchReff.current.value;
    router.push(`/search/${keyword}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="relative md:mx-64">
        <input
          type="text"
          placeholder="Search...."
          ref={searchReff}
          className="border text-sm p-2 rounded-lg md:w-96"
        />
        <CiSearch size={27} className="absolute right-2 top-1/4" />
      </div>
    </form>
  );
};
export default InputSearch;
