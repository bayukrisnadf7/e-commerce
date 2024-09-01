import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Category from "@/components/Category";
import CarouselView from "@/components/Utilities/Carousel";
export default async function Home() {
  const all_products = await getProductApi('products','limit=10');
  const all_categories = await getProductApi('products/category-list');
  const get_category = await getProductApi('products/category/beauty');
  // console.log(get_category)
  return (
    <div className="w-full">
      <Navbar />
      <div className="mx-20">
      <CarouselView/>
      <Category api={all_categories} />
      <Product api={all_products} />
      </div>
    </div>
    
  );
}
