import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Navbar(){
    const router=useRouter();

    return(
        <div className="w-full h-[70px] bg-[#fff] shadow fixed top-0 z-50 ">
            <div className="container h-full flex items-center pl-6">
                <Image src={'/images/logo.svg'} alt="" width={"120px"} height="50px" onClick={()=>router.push('/')} className=" cursor-pointer"/>
            </div>
        </div>
    )
}

