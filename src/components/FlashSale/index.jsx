"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  };
  const startTimer = (event) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(event);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTime = (event) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(event);
    if (total < 0) {
      setTimer("24:00:00");
    }
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(event);
    }, 1000);
    Ref.current = id;
  };
  const getDeathTime = () => {
    let deathTime = new Date();
    deathTime.setHours(deathTime.getHours() + 24);
    return deathTime;
  };
  useEffect(() => {
    clearTime(getDeathTime());
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,  
    slidesToScroll: 3,
    autoplay:true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="border mt-5 capitalize p-1 rounded-lg max-w-full">
      <div className="flex items-center justify-between">
        <h1 className="p-2 font-bold flex items-center text-green-600">
          F<AiFillThunderbolt size={20} />
          ASH SALE
        </h1>
        <p className="text-sm font-bold p-2 rounded-xl text-red-600">
          {timer}
        </p>
      </div>
      <hr />
      {/* <Carousel> */}
      <div className="md:p-5 p-4">
        <Slider {...settings}>
          {api.products.map((data) => (
            <div
              className="relative border-2 rounded-xl md:max-w-52 max-w-36 md:max-h-56 max-h-48 bg-slate-50 flex md:p-5 p-1 md:mx-10 mx-2"
              key={data.id}
            >
              <Link href={`products/${data.id}`}>
                <Image
                  src={data.images[0]}
                  width={250}
                  height={250}
                  className="images md:max-w-40 md:max-h-24 max-h-24 object-cover"
                  alt={data.title}
                />
                <div className="mt-3 mx-4">
                  <p className="md:text-sm text-xs font-bold">
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
        </Slider>
      </div>
      {/* </Carousel> */}
    </div>
  );
};

export default FlashSale;
