import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Category from "@/components/Category";
import CarouselView from "@/components/Utilities/Carousel";
import FlashSale from "@/components/FlashSale";
export default async function Home() {
  const allProducts = await getProductApi('products','limit=6');
  const flashSaleProduct = await getProductApi('products', 'limit=6')
  const allCategories = await getProductApi('products/category-list');
  return (
    <div className="w-full mb-5">
      <Navbar />
      <div className="mx-20">
      <CarouselView/> 
      <FlashSale api={flashSaleProduct} />
      <Category api={allCategories} />
      <Product api={allProducts} title={"Recom Products"} />
      </div>
    </div>
    
  );
}
