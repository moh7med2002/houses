import MenuSearch from "./search/menu";
import HouseBox from "./search/Box";
import {housesData} from '../../data/dataBase'
import { useState ,useEffect} from "react";

export default function Search(){
    const [subData,setSubData]=useState(housesData);
    const [location,setLocation]=useState('all');
    const [property,setProperty]=useState('all');
    const [price,setPrice]=useState('all');
    
    function filterData(){
        const min=price==="all"?0:parseInt(price.split(' - ')[0]);
        const max=price==="all"?0:parseInt(price.split(' - ')[1]);
        setSubData(housesData.filter(house=> 
            (house.country===location || location==="all") && 
            (property==="all" || house.type===property) &&
            ( (parseInt(house.price)>=min &&parseInt(house.price)<=max) || price==="all")));
    }
    return(
        <div className="py-[50px] px-2">
            <div className="container">
                <MenuSearch setLocation={setLocation} filterData={filterData} setProperty={setProperty} setPrice={setPrice} 
                location={location} property={property} price={price}/>
                {
                    subData.length>0?
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-[30px] mt-8">
                        {
                            subData.map(data=>{
                                return <HouseBox {...data} key={data.id}/>
                            })
                        }
                    </div>
                    :
                    <div>No Data</div>
                }
            </div>
        </div>
    )
}