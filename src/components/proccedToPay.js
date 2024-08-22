import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";



function ProccedToPay(){
    return <Box >
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

        <Typography sx={{fontWeight:'bold',fontSize:'30px'}}>{`Successfully Placed your Order`}</Typography>
        </Box>
        <Link to='/home' ><Typography sx={{textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>Go to Home</Typography></Link>
    </Box>
}
export default ProccedToPay