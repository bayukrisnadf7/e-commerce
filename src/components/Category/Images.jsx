import Image from "next/image"
const ImagesCategory = ({ images }) => {
    return (
        <div>
            <Image src={images} width={100} height={100} alt="image" className="object-cover" />
        </div>
    )
}
export default ImagesCategory