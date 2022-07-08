import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import {BiBed,BiBath} from 'react-icons/bi';

export default function HouseBox({id,image,type,name,bedrooms,bathrooms,price,country}){
    return(
        <motion.div  initial={{opacity:0, x:'-20px'}} animate={{opacity:1,x:0}} transition={{duration:0.4}}>
        <Link key={id+'3'} href={`/house/${id}`}>
                            <div className="shadow p-3 pb-5 cursor-pointer">
                                <div className="mb-4">
                                    <Image alt="load" src={image} width="520px" height="520px"/>
                                </div>
                                <div className="flex gap-2 text-white text-[13px] mb-3">
                                    <span className="bg-[#00C897] rounded-full px-2">{type}</span>
                                    <span className="bg-violet-800 rounded-full px-2">{country}</span>
                                </div>
                                <h3 className="text-black font-bold text-[15px] mb-3">{name}</h3>
                                <div className="flex gap-2 items-center text-[#747579] text-[15px] mb-2">
                                    <span className="flex gap-1 items-center">
                                        <BiBed/>
                                        <span>{bedrooms}</span>
                                    </span>
                                    <span className="flex gap-1 items-center">
                                        <BiBath/>
                                        <span>{bathrooms}</span>
                                    </span>
                                </div>
                                <h4 className="text-violet-800 text-[15px] font-bold"><span>$ </span>{price}</h4>
                            </div>
        </Link>
        </motion.div>
    )
}