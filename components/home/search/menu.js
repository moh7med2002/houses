import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';
import {GrLocation} from 'react-icons/gr'
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import {ImLocation2} from 'react-icons/im'
import {MdOutlinePayments} from 'react-icons/md'
import { useState } from 'react';
export default function MenuSearch({setLocation,location,setProperty,property,setPrice,price,filterData}){
    const[showMenu,setShowMenu]=useState("");
    function sendMenuName(name){
        if(name===showMenu){
            setShowMenu('');
        }
        else{
            setShowMenu(name);
        }
    }

    function submitForm(e){
        e.preventDefault();
        filterData();
    }

    return(
        <div className='bg-white shadow'>
                <form action="#" className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[100%] px-7 py-5' onSubmit={(e)=>submitForm(e)}>

                    <div className='border rounded px-4 py-2 cursor-pointer relative' onClick={()=>sendMenuName("one")}>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <ImLocation2 className=' text-secondary text-[20px]'/>
                                <div className='ml-3'>
                                    <h6 className='text-[14px] font-semibold'>{location==="all"?'Location (any)':location}</h6>
                                    <p className=' text-[#777] text-[12px] font-[500]'>Select your place</p>
                                </div>
                            </div>
                            <div>
                            {
                                showMenu==="one"?
                                <IoIosArrowUp className='text-secondary text-[20px]'/>:
                                <IoIosArrowDown className='text-secondary text-[20px]'/>
                            }
                            </div>
                        </div>

                        <div className={`absolute top-[100%] left-0 bg-[#ffffff] z-[5] mt-[1px] shadow w-full flex-col rounded px-4 py-3 ${showMenu==="one"?"flex":"hidden"}`}
                        >
                            <span className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setLocation('all')}>Location (any)</span>
                            <span className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setLocation('United States')}>United States</span>
                            <span className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setLocation('Canada')}>Canada</span>
                        </div>
                    </div>

                    <div className='border rounded  px-4 py-2 cursor-pointer relative' onClick={()=>sendMenuName("two")}>
                        <div className='flex justify-between items-center'>
                            <div  className='flex items-center'>
                                <AiOutlineHome className=' text-secondary text-[20px]'/>
                                <div  className='ml-3'>
                                    <h6 className='text-[14px] font-semibold'>{property==="all"?'Property type (any)':property}</h6>
                                    <p className=' text-[#777] text-[12px] font-[500]'>Choose property type</p>
                                </div>
                            </div>
                            <div>
                                {
                                    showMenu==="two"?
                                    <IoIosArrowUp className='text-secondary text-[20px]'/>:
                                    <IoIosArrowDown className='text-secondary text-[20px]'/>
                                }
                            </div>
                        </div>

                        <div className={`absolute top-[100%] left-0 bg-[#ffffff] z-[5] mt-[1px] shadow w-full flex-col rounded px-4 py-3 ${showMenu==="two"?"flex":"hidden"}`}>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setProperty('all')}>Property type (any)</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setProperty('House')}>House</span>
                            <span className='block h-[28px] text-[#777] fonr-[500]'  onClick={()=>setProperty('Apartament')}>Apartament</span>
                        </div>
                    </div>

                    <div className='border rounded  px-4 py-2 cursor-pointer relative'  onClick={()=>sendMenuName("three")}>
                        <div className='flex justify-between items-center'>
                            <div  className='flex items-center'>
                                <MdOutlinePayments className=' text-secondary text-[20px]'/>
                                <div className='ml-3'>
                                    <h6 className='text-[14px] font-semibold'>{price==="all"?"Price range (any)":price}</h6>
                                    <p className=' text-[#777] text-[12px] font-[500]'>Choose price range</p>
                                </div>
                            </div>
                            <div>
                            {
                                    showMenu==="three"?
                                    <IoIosArrowUp className='text-secondary text-[20px]'/>:
                                    <IoIosArrowDown className='text-secondary text-[20px]'/>
                                }
                            </div>
                        </div>

                        <div className={`absolute top-[100%] left-0 bg-[#ffffff] z-[5] mt-[1px] shadow w-full flex-col rounded px-4 py-3 ${showMenu==="three"?"flex":"hidden"}`}>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('all')}>Price range (any)</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('100000 - 130000')}>100000 - 130000</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('130000 - 160000')}>130000 - 160000</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('160000 - 190000')}>160000 - 190000</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('190000 - 220000')}>190000 - 220000</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('20000 - 30000')}>20000 - 30000</span>
                            <span  className='block h-[28px] text-[#777] fonr-[500]' onClick={()=>setPrice('30000 - 40000')}>30000 - 40000</span>
                        </div>
                    </div>
                    
                    <button type="submit" className='w-[120px] min-h-[50px]  bg-secondary text-[#fff] rounded-md flex justify-center items-center
                    duration-200 hover:bg-opacity-90'>
                        <AiOutlineSearch/></button>
                </form>
        </div>
    )
}