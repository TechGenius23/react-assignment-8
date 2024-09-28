
import { useEffect, useState } from "react";
import { getBlogs } from ".";
import Maincard from "./Maincard";


const Wishlist = () => {
    const[datat,setdatat]=useState([])
    useEffect(()=>{
        const storeData=getBlogs;
        setdatat(storeData)
    },[])
    return (
        <div  className="w-full h-fit">
            {
                datat?.map(data => <Maincard key={data.id} data={data}></Maincard>)
            }
        </div>
    );
};

export default Wishlist;