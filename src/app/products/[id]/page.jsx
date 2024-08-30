import { getProductApi } from "@/libs/api"

const Page = async ({ params }) => {
    const { id } = params
    const detailProduct = await getProductApi(`products/${id}`)
    return (
        <div></div>
    )
}
export default Page