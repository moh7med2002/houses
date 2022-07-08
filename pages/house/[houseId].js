import {useRouter} from 'next/router';
import { useEffect, useState, } from 'react';
import House from '../../components/home/House';
import { housesData } from '../../data/dataBase';
export default function HouseSelect(){
    const router=useRouter();
    const {houseId}=router.query;
    const house =housesData.filter(h=>h.id.toString()===houseId)[0];
    const[isLoad,setIsLoad]=useState(false);

    // function getHouse(){
    //     setHouse(housesData.filter(h=>h.id.toString()===houseId));
    //     console.log("in function");
    // }

    // function ifLoad(){
    //     if(house.length>0){
    //         setIsLoad(true);
    //     }
    //     else{
    //         setIsLoad(false);
    //     }
    // }

    // useEffect(()=>{
    //     getHouse();
    //     ifLoad();
    //     console.log('in effect');
    // },[isLoad]);

    console.log(house);
    return(
        <div className="mt-[70px] px-2">
            <div className="container">
                {
                    house?<div><House props={house}/></div>:<div>Loading....</div>
                }
            </div>
        </div>
    )
}