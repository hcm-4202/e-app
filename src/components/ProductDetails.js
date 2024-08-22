import { Box, Grid, Typography,Button } from "@mui/material"
import { useState,useEffect } from "react"
import { fetchAllProducts } from "../utils"
import { useParams } from "react-router"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { add ,decrease} from "../store/appSlice";
function ProductDetails(){
    const data  = useSelector((state)=>state.shop.item)
    const dispatch = useDispatch()
    const {id} = useParams()
    const [productsDetails,setProductsDetails] = useState([])
    
    useEffect(()=>{
       fetchAllProducts().then(res=>setProductsDetails(res))
    },[])
    
    return <Box>
           {productsDetails.map((item)=>{
            let count =0
             if(item.id == id){
                return <Box key={item.id}> 
                    <Box sx={{width:'100vw', textAlign:'center'}}>
                        <Grid container spacing={3}>
                        <Grid item xs={2}>
                        <Typography sx={{fontWeight:'bold', marginTop:'30vh', fontSize:'35px', color:'blueviolet'}}>{`Price :${item.price}`}</Typography>
                        </Grid>
                        <Grid item xs={8}>

                        <img src={item.image} style={{height:'65vh', width:'60vw'}}/>
                        </Grid>
                        <Grid item xs={2}>
                        {data.map((val)=>{
                          if(val.id === item.id){
                             count = val.itemCount
                            }

                         })}
                        {count ==0 ? <Button sx={{border: '1px solid gray', marginTop:'17px' ,marginTop:'30vh',paddingX:'30px'}} onClick={()=>dispatch(add(item))}>Add to cart <Typography sx={{marginLeft:'5px', marginTop:'5px'}}><ShoppingCartOutlinedIcon/></Typography> </Button> 
                       : <Box sx={{display:'flex' ,border:'1px solid gray', width:'150px', marginTop:'30vh'}}>
                <Button sx={{borderRight:'1px solid gray'}} onClick={()=>dispatch(decrease(item))}><RemoveIcon/></Button>
                <Typography sx={{marginX:'10px',fontWeight:'bold',marginTop:'5px'}}>{count}</Typography>
                 <Button sx={{borderLeft:'1px solid gray'}} onClick={()=>dispatch(add(item))}><AddIcon/></Button>
                </Box>} 
                        
                        </Grid>
                        </Grid>
                        <Typography sx={{fontWeight:'bold'}}>{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                     </Box>
                </Box>
             }
           })}
    </Box>
}
export default ProductDetails