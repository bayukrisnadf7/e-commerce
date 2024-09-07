import Navbar from "@/components/Utilities/Navbar"
import Image from "next/image"
import Link from "next/link"
const LoginPage = () => {
    return (
        <>
        <Navbar />
        <div className="flex md:flex-row flex-col md:justify-between md:mx-44 items-center md:mt-28">
        <Image src={"/img/undraw_shopping_app_flsj.png  "} width={500} height={500} alt="image" className="object-cover md:w-1/2 md:h-1/2 w-64 h-64"/>
            <div className="flex flex-col gap-5 w-80">
                <h1 className="text-xl text-center font-bold text-green-500">LOGIN</h1>
                <p className="text-sm">Please login to your account</p>
                <input type="text" placeholder="johndoe@example" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <input type="text" placeholder="********" className="border-2 border-transparent hover:border-green-600 rounded-xl" />
                <button className="bg-green-600 text-white rounded-xl p-2">Login</button>
                <p className="text-sm text-center">Don't have an account ? <Link href={"/auth/register"} className="text-blue-600">Register</Link></p>
            </div>
        </div>
        </>
    )
}
export default LoginPage