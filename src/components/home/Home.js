import { Box } from "@mui/material";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { fetchAllProducts } from "../../utils";



function Home(){
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
      fetchAllProducts().then(res=>setProducts(res))
      
    },[])
    return <Box>
         <Categories/>
         <CardComponent products={products}/>
    </Box>
}

export default Home