import Product from "@/components/Products";
import { getProductApi } from "../libs/api";
import Navbar from "@/components/Utilities/Navbar";
import Carousel from "@/components/Utilities/Carousel";
import Category from "@/components/Category";
export default async function Home() {
  const all_products = await getProductApi('products','limit=14');
  const all_categories = await getProductApi('products/category-list');
  console.log(all_categories)
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Category api={all_categories} />
      <Product api={all_products} />
    </div>
    
  );
}
