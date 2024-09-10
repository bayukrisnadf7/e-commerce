"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineTimer } from "react-icons/md";
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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", right: 0, width: "30px", height: "30px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", left: 0, width: "30px", height: "30px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,  
    slidesToScroll: 3,
    autoplay:true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="border mt-5 capitalize p-1 rounded-lg">
      <div className="flex items-center justify-between mx-3">
        <h1 className="p-2 font-bold flex items-center text-green-600">
          F<AiFillThunderbolt size={20} />
          ASH SALE
        </h1>
        <p className="text-sm font-bold p-1 bg-red-600 text-white rounded-xl flex gap-2 ">
          <MdOutlineTimer size={20} />
          {timer}
        </p>
      </div>
      <hr />
      {/* <Carousel> */}
      <div className="p-4 w-full">
        <Slider {...settings}>
          {api.products.map((data) => (
            <div
              className="relative border-2 rounded-xl md:max-w-44 max-w-36 max-h-full bg-slate-50 flex justifyp-1 "
              key={data.id}
            >
              <Link href={`products/${data.id}`}>
                <Image
                  src={data.images[0]}
                  width={250}
                  height={250}
                  className="images md:max-w-40 max-w-32 max-h-32 object-cover"
                  alt={data.title}
                />
                <div className="mt-3 md:mx-4 mx-2">
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
