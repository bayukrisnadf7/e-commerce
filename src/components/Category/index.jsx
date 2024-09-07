"use client";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
const Category = ({ api, link }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="border mt-5 mb-5 capitalize p-1 rounded-lg">
      <div className="flex items-center justify-between mx-2">
        <h1 className="p-2 font-bold text-green-600">Category</h1>
        <div className="md:hidden">
          <button onClick={handleShow}>
            {show ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
          </button> 
        </div>
      </div>
      <hr />
      <div className="mt-2 mx-3 md:block hidden">
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
      {/* jika show true maka tampilan muncul */}
      {show && (
        <>
        <hr />
        <div className="grid grid-cols-2 mt-2 gap-2 mx-3">
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
        </>
      )}
    </div>
  );
};
export default Category;
