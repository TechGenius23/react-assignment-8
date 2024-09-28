import { useEffect, useState } from "react";
import { getBlogs } from ".";
import Maincard from "./Maincard";


const Readbook = () => {
    const[datat,setdatat]=useState([])
    console.log(datat);
    useEffect(()=>{
        const storeData=getBlogs;
        setdatat(storeData)
    },[])
    return (
        <div  className="w-full h-fit">
             {
          datat && datat?.map(data => <Maincard key={data.id} data={data}></Maincard>)
        }
        </div>
    );
};

export default Readbook;