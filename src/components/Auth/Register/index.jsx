import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Utilities/Navbar"
const RegisterPage = () => {
    return (
        <>
        <Navbar />
        <div className="flex md:flex-row flex-col md:justify-between md:mx-44 items-center md:mt-28">
            <Image src={"/img/undraw_shopping_app_flsj.png  "} width={500} height={500} alt="image" className="object-cover md:w-1/2 md:h-1/2 w-64 h-64"/>
            <div className="flex flex-col gap-5 w-80">
                <h1 className="text-xl text-center font-bold text-green-500">REGISTER</h1>
                <p className="text-sm">Please enter your details</p>
                <input type="text" placeholder="johndoe@example" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <input type="text" placeholder="username" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <input type="text" placeholder="address" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <input type="text" placeholder="gender" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <input type="text" placeholder="********" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <button className="bg-green-600 text-white rounded-xl p-2">Login</button>
                <p className="text-sm text-center">Have an account ? <Link href={"/auth/login"} className="text-blue-600">Login</Link></p>
            </div>
        </div>
        </>
    )
}
export default RegisterPage