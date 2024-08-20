import { Box, Button, Grid, ListItem, ListItemText, Menu, MenuItem, Typography } from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
function Header(){
   const data = useSelector((val)=> val.shop)
  const [open,setOpen] =useState(false)
  const [user,setUser] = useState(true)
  function handleIcon(){
      setOpen(!open)
  }
 
    return  <Box sx={{height:'100px', backgroundColor:'lightblue'}}> 
          <Box sx={{display:'flex',alignItems:'center', height:'100px'}}>
                 <Grid container spacing={3}>
                 <Grid item xs={9}>
                 <Box sx={{display:'flex', }}>
                  
                   <Typography sx={{fontSize:'50px',fontWeight:'bold' ,color:'#205058'}}>ShoppingMart</Typography>
                 </Box>
                 </Grid>
                <Grid item xs={1} sx={{cursor:'pointer'}}>
                <Box >
                  <Link to={'/cart'} style={{textDecoration:'none'}}>
                  <ListItem>
                    
                    <ListItemText ><Typography sx={{fontWeight:'bold',fontSize:'20px',marginTop:'4px'}}>Cart</Typography></ListItemText>
                    <Box>
                    <ShoppingCartOutlinedIcon sx={{position:'absolute'}}/>
                     <Typography sx={{position:'relative' ,color:'red' ,fontWeight:'bold' ,paddingLeft:'20px',fontSize:'20px'}}>{data.item.length}</Typography>
                     
                    </Box>
                  </ListItem>
                  </Link>
                 </Box>
                </Grid>
                <Grid item xs={2}>  
                 <Box sx={{marginLeft:'140px'}}>
                     <Box  sx={{fontSize:'30px'}} onClick={handleIcon} >

                      <AccountCircleOutlinedIcon sx={{fontSize:'40px'}} />
                <Menu
              sx={{ mt: '45px'  }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              open ={open}
            >
              
                <MenuItem sx={{height:'150px' ,width:'120px'}}>
                {user ? <Box>
                  <Button  sx={{textAlign:'center',color:'black',border:'1px solid black'}}>Login</Button>
                </Box> :
                  <Box  sx={{backgroundColor:'transparent' }}>
                    <Typography sx={{mb:'25px'}}>{`hello ${'Tulasi'}`}</Typography>
                    <Button  sx={{textAlign:'center',color:'black',border:'1px solid black'}}>Logout</Button></Box>
                 }
                </MenuItem>
            
            </Menu>
                      </Box>
                 </Box>
                </Grid>

                 </Grid>
                 
                
             </Box>
    </Box>
      
  
}
export default Header