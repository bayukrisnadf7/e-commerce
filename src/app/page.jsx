import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Category from "@/components/Category";
import CarouselView from "@/components/Utilities/Carousel";
import FlashSale from "@/components/FlashSale";
export default async function Home() {
  const allProducts = await getProductApi("products", "limit=10");
  const flashSaleProduct = await getProductApi("products", "limit=10");
  const allCategories = await getProductApi("products/category-list");
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="md:flex mb-5 md:mx-20 mx-5 gap-5">
        <div className="md:w-1/5 w-full">
          <Category api={allCategories} link={"category"} />
        </div>
        <div className="md:w-4/5 w-full">
          <FlashSale api={flashSaleProduct} />
          <Product api={allProducts} title={"Cosmetics Product"} />
        </div>
      </div>
    </>
  );
}
