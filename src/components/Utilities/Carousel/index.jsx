import { Carousel } from "flowbite-react";

const CarouselView = () => {
  return (
    <div className="md:h-64 h-36 md:mt-4 md:mx-20 ">
      <Carousel className="">
        <img src="/img/summer-sale-banner-template-promotion-with-product-3d-product-display-hello-summer-holiday-beach-horizontal-banner-hi-summer-vacation-discount-travel-poster-colorful-tropical-sea-beach-landscape-free-ve.jpg" alt="..." className="md:rounded-2xl" />
        <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/8/23/e4462f15-eb1f-4c46-b679-63ee49786c98.jpg.webp?ect=4g" alt="..." className="md:rounded-2xl" />
        <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/5/d2bbee2b-56c9-4cfe-8092-026455ecc708.jpg.webp?ect=4g" alt="..." className="md:rounded-2xl" />
      </Carousel>
    </div>
  );
}
export default CarouselView