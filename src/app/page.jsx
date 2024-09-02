import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Category from "@/components/Category";
import CarouselView from "@/components/Utilities/Carousel";
export default async function Home() {
  const all_products = await getProductApi('products','limit=24');
  const all_categories = await getProductApi('products/category-list');
  return (
    <div className="w-full mb-5">
      <Navbar />
      <div className="mx-20">
      <CarouselView/>
      <Category api={all_categories} />
      <Product api={all_products} />
      </div>
    </div>
    
  );
}
