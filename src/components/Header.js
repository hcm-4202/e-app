import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { addToken } from "../store/appSlice";
function Header() {
  const dispatch = useDispatch()
  const headerCount = useSelector((val) => val.shop.headerCount);
  const token = useSelector((val) =>val.shop.token)
  const [open, setOpen] = useState(false);
  function handleIcon() {
    setOpen(!open);
  }
   useEffect(()=>{
      dispatch(addToken(localStorage.getItem('token')))
   },[])
  return (
    <Box> 
      {token ? 
    <Box sx={{ height: "100px", backgroundColor: "lightblue" }}>
      <Box sx={{ display: "flex", alignItems: "center", height: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Box sx={{ display: "flex" }}>
              <Link to={"/home"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "#205058",
                  }}
                >
                  Shopping Mart
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={1} sx={{ cursor: "pointer" }}>
            <Box>
              <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemText>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginTop: "4px",
                      }}
                    >
                      Cart
                    </Typography>
                  </ListItemText>
                  <Box>
                    <ShoppingCartOutlinedIcon sx={{ position: "absolute" }} />
                    <Typography
                      sx={{
                        position: "relative",
                        color: "red",
                        fontWeight: "bold",
                        paddingLeft: "20px",
                        fontSize: "20px",
                      }}
                    >
                      {headerCount}
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ marginLeft: "140px" }}>
              <Box sx={{ fontSize: "30px" }} onClick={handleIcon}>
                <AccountCircleOutlinedIcon sx={{ fontSize: "40px" }} />
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    sx={{ height: "150px", width: "120px", marginLeft: "20px" }}
                  >
                    {!localStorage.getItem("token") ? (
                      <Box>
                        <Link to={"/login"}>
                          <Button
                            sx={{
                              textAlign: "center",
                              fontSize: "18px",
                              border: "1px solid gray",
                            }}
                          >
                            Login
                          </Button>
                        </Link>
                      </Box>
                    ) : (
                      <Box sx={{ backgroundColor: "transparent" }}>
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                          <Typography
                            sx={{ mb: "25px" }}
                          >{`hello ${localStorage.getItem(
                            "userName"
                          )}`}</Typography>
                        </Link>
                        <Link to="/">
                          <Button
                            sx={{
                              textAlign: "center",
                              color: "black",
                              border: "1px solid black",
                            }}
                            onClick={() => {
                              localStorage.clear()
                              dispatch(addToken(''))
                            }
                            }
                          >
                            Logout
                          </Button>
                        </Link>
                      </Box>
                    )}
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
     : ''}
    </Box>
  );
}
export default Header;
