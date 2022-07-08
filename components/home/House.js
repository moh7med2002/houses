import Image from "next/image";
import {FaBath,FaBed,FaStroopwafel} from 'react-icons/fa'
export default function House({props}){
    console.log(props.agent.image);
    return(
        <div className="py-[50px] flex justify-between flex-wrap gap-y-[30px]">
            <div className="lg:w-[62%] w-[100%]">
                <h3 className=" text-primary font-bold text-[20px]">{props.name}</h3>
                <div className="flex justify-between max-w-[800px] mt-1 flex-wrap gap-y-3">
                    <p className=" text-primary">{props.address}</p>
                    <div className="flex gap-2 text-white text-[13px] mb-3">
                        <span className="bg-[#00C897] rounded-full px-2">{props.type}</span>
                        <span className="bg-violet-800 rounded-full px-2">{props.country}</span>
                    </div>
                </div>
                <div>
                    <Image src={props.imageLg} alt="" width={"800px"} height="540px"/>
                </div>
                <ul className="flex items-center gap-8 my-3">
                    <li className="flex items-center gap-2 text-secondary">
                        <span><FaBed/></span>
                        <span>{props.bedrooms}</span>
                    </li>
                    <li className="flex items-center gap-2 text-secondary">
                        <span><FaBath/></span>
                        <span>{props.bathrooms}</span>
                    </li>
                    <li className="flex items-center gap-2 text-secondary">
                        <span><FaStroopwafel/></span>
                        <span>{props.surface}</span>
                    </li>
                </ul>
                <p className="max-w-[800px] text-[15px] leading-[120%] text-primary">{props.description}</p>
            </div>

            <div className="lg:w-[35%] w-[100%]">
                <h3 className="text-secondary text-[22px] lg:text-right font-semibold  max-w-[400px]">$ {props.price}</h3>
                <form action="#" onSubmit={e=>e.preventDefault()}
                className="border border-gray-400 rounded max-w-[400px] px-4 py-5">
                    <div className="flex items-center gap-2">
                        <div className=" w-fit p-[4px] border rounded-full flex items-center justify-center">
                            <Image src={props.agent.image} alt="" width={"70px"} height="70px"/>
                        </div>
                        <h4 className="font-bold text-[15px] text-primary">{props.agent.name}</h4>
                    </div>
                    <div className="mt-6">
                        <input 
                        className="w-full h-[40px] px-2 py-1 border border-gray-300 outline-none rounded duration-200 focus:border-violet-700"
                        placeholder="Name*" type={'text'} name="name"/>
                        <input 
                        className="w-full h-[40px] px-2 py-1 border border-gray-300 outline-none rounded duration-200 focus:border-violet-700"
                        placeholder="Email*" type={'email'} name="eamil"/>
                        <input 
                        className="w-full h-[40px] px-2 py-1 border border-gray-300 outline-none rounded duration-200 focus:border-violet-700"
                        placeholder="Phone*" type={'text'} name="phone"/>
                        <textarea 
                        className="w-full h-[120px] px-2 py-1 border border-gray-300 outline-none rounded duration-200 focus:border-violet-700"
                        name="message" placeholder="Hello I am interested in [Modern apartment]"/>
                    </div>
                    <div className="flex justify-between gap-[6px]">
                        <button className="w-[50%] h-[40px] bg-violet-800 text-[#fff] rounded duration-200 hover:bg-opacity-90">
                            Send message</button>
                        <button className="w-[50%] h-[40px] text-secondary border border-secondary rounded duration-200 hover:bg-violet-800 hover:text-[#fff]">
                            Call</button>
                    </div>
                </form>
            </div>
        </div>
    )
}