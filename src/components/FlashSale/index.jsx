"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FlashSale = ({ api }) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("24:00:00");
  const getTimeRemaining = (event) => {
    const total = Date.parse(event) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }
  const startTimer = (event) => {
    let {total, hours, minutes, seconds} = getTimeRemaining(event);
    if(total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }
  const clearTime = (event) => {
    let {total, hours, minutes, seconds} = getTimeRemaining(event);
    if(total < 0) {
      setTimer('24:00:00');
    }
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(event);
    }, 1000)
    Ref.current = id
  }
  const getDeathTime = () => {
    let deathTime = new Date();
    deathTime.setHours(deathTime.getHours() + 24);
    return deathTime
  }
  useEffect(()=> {
    clearTime(getDeathTime())
  },[])
  return (
    <div className="border mt-5 mb-5 capitalize p-1 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="p-2 font-bold flex items-center text-green-600">
            F<AiFillThunderbolt size={20} />
            ASH SALE
          </h1>
          <p className="text-sm font-bold p-2 rounded-xl  text-red-600">{timer}</p>
        </div>
      <hr />
      {/* <Carousel> */}
      <div className="grid grid-cols-6 justify-center gap-5 p-3">
        {api.products.map((data) => (
          <div
            className="relative border-2 rounded-xl min-w-40 bg-slate-50 flex justify-center p-3"
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
                <p className="absolute top-0 right-1 text-xs font-bold  bg-green-200 p-1 rounded-xl">
                  -65%
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* </Carousel> */}
    </div>
  );
};

export default FlashSale;
