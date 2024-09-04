import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Category from "@/components/Category";
import CarouselView from "@/components/Utilities/Carousel";
import FlashSale from "@/components/FlashSale";
export default async function Home() {
  const allProducts = await getProductApi("products", "limit=10");
  const flashSaleProduct = await getProductApi("products", "limit=6");
  const allCategories = await getProductApi("products/category-list");
  return (
    <>
      <Navbar />
      <CarouselView />
      <div className="flex mb-5 mx-20 gap-5">
        <div className="w-1/4">
          <Category api={allCategories} link={"category"} />
        </div>
        <div className="w-3/2">
          <FlashSale api={flashSaleProduct} />
          <Product api={allProducts} title={"Recom Products"} />
        </div>
      </div>
    </>
  );
}
