import Image from "next/dist/client/image"
export default function Land(){
    return(
        <div className="py-[50px] pl-7">
            <div className=" container grid lg:grid-cols-2 items-center">
                <div>
                    <h2 className=" capitalize text-[36px] font-semibold">
                        <span className=" text-secondary">rent</span> your dream house with us.</h2>
                    <p className="max-w-[480px] mb-8 text-[14px] leading-[120%] text-[#777]">
                        Powerfull&sbquo; self-serve product and growth analytics to help you convert&sbquo; engage&sbquo; and retain more.
                    </p>
                </div>
                <div className="lg:text-right text-center">
                    <Image src={'/images/house-banner.png'} alt="" width={"600px"} height="520px"/>
                </div>
            </div>
        </div>
    )
}