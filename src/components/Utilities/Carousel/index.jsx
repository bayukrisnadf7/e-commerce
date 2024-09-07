import { Carousel } from "flowbite-react";

const CarouselView = () => {
  return (
    <div className="md:h-64 h-36 md:mt-4 md:mx-20 ">
      <Carousel className="">
        <img src="/img/wp-content-uploads-2016-05-indiabbazaar-e-commerce.jpg" alt="..." className="md:rounded-2xl" />
        <img src="/img/IMG-20220913-WA0040-1024x465.jpg" alt="..." className="md:rounded-2xl" />
        <img src="/img/pixosoft-slider-3.jpg" alt="..." className="md:rounded-2xl" />
      </Carousel>
    </div>
  );
}
export default CarouselView