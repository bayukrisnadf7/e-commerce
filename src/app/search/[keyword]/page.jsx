import { getProductApi } from "@/libs/api";

const Page = async ({ params }) => {
    const { keyword } = params;
    const searchProduct = await getProductApi(`products/search?q=${keyword}`);
    console.log(searchProduct)
    return (
        <div>
        </div>
    )
}
export default Page