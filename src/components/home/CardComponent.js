import { Box, Button, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/appSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CardComponent({products}){
    const dispatch = useDispatch()
    const data  = useSelector((state)=>state.shop.item)
    return <Box sx={{display:'flex',flexWrap:'wrap'}}>
         {products.map((product)=>{
            let count =0
           return  <Box key={product.id} sx={{height:'400px',width:'350px' ,margin:'20px' ,backgroundColor:'lightgray' ,textAlign:'center',cursor:'pointer'}}> 
            <Link style={{textDecoration:'none', color:'black'}} to={`/product/${product.id}`} >
            <img src={product.image} style={{height:'180px', width:'200px',paddingTop:'20px'}}/>
            <Typography >{product.title}</Typography>
            <Typography sx={{fontWeight:'bold'}}>{`Price :${product.price}`}</Typography>
          </Link>
           {data.map((val)=>{
            if(val.id === product.id){
               count = count +1
            }

           })}
           {count ==0 ? <Button sx={{border: '1px solid gray', marginTop:'17px'}} onClick={()=>dispatch(add(product))} >Add to cart <Typography sx={{marginLeft:'5px', marginTop:'5px'}}><ShoppingCartOutlinedIcon/></Typography> </Button>
            : <Box sx={{display:'flex' ,border:'1px solid gray', width:'150px', marginLeft:'90px',marginTop:'30px'}}>
                <Button sx={{borderRight:'1px solid gray'}}><RemoveIcon/></Button>
                <Typography sx={{marginX:'10px',fontWeight:'bold',marginTop:'5px'}}>{count}</Typography>
                 <Button sx={{borderLeft:'1px solid gray'}} onClick={()=>dispatch(add(product))}><AddIcon/></Button>
                </Box>}

          </Box>
         })}
          
    </Box>
}

export default CardComponent