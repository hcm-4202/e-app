import { Box, Button, TextField, Typography } from "@mui/material"


function Login(){
    return <Box sx={{display:'flex', justifyContent:'center',
            alignItems:'center', height:'86vh', backgroundColor:'lightgray'
            
            }}>
            <Box sx={{border:'2px solid black' , height:'350px',width:'300px',borderRadius:'5px',textAlign:'center'}}>
                <Typography sx={{fontSize:'25px', fontWeight:'bold', paddingTop:'10px'}}>Login</Typography>
                <Box sx={{paddingY:'50px'}}>

                <TextField  label="UserName" variant="outlined" size="small" />
                </Box>
                <Box sx={{paddingBottom:'40px'}}>

                <TextField  label="Password" variant="outlined" size="small"  type="password"/>
                </Box> <br/>
                <Button sx={{border:' 1px solid black' ,paddingX:'20px',backgroundColor:'lightseagreen',color:'black' ,fontWeight:'bold'}}>Login</Button>
            </Box>
    </Box>
}
export default Login