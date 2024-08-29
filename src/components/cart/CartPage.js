import { Box, Grid, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, decrease, remove } from "../../store/appSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartPage() {
  const data = useSelector((state) => state.shop);
  const {cartItem,headerCount,totalPrice} = data
  const dispatch = useDispatch();

  function handleConfirm(items) {
    if (window.confirm("Item is removing from Cart") == true) {
      dispatch(decrease(items));
    }
  }
  return (
    <>
      {cartItem.length === 0 ? (
        <Box sx={{ height: "86.3vh", backgroundColor: "lightgray" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", color: "darkred" }}
            >
              Cart is Empty
            </Typography>
            <ShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />
          </Box>
          <Link to="/home">
            <Typography
              sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
            >
              Go to Home
            </Typography>
          </Link>
        </Box>
      ) : (
        <Box>
          <Box sx={{ backgroundColor: "lightgray", height: "88.5vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Box
                  sx={{
                    overflowY: "auto",
                    maxHeight: "629px",
                    marginRight: "100px",
                    backgroundColor: "lightgray",
                    marginLeft: "100px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "35px",
                      color: "darkolivegreen",
                    }}
                  >{`Cart : ${headerCount}`}</Typography>
                  {cartItem.map((items) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          margin: "30px",
                          marginBottom: "20px",
                        }}
                      >
                        <Box sx={{ width: "400px" }}>
                          <img
                            src={items.image}
                            style={{ height: "300px", width: "400px" }}
                          />
                          <Typography
                            sx={{ fontWeight: "bold", marginTop: "7px" }}
                          >
                            {items.title}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              marginLeft: "90px",
                              fontSize: "25px",
                              fontWeight: "bold",
                              color: "blueviolet",
                            }}
                          >{`Price : ${items.price}`}</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              border: "1px solid gray",
                              width: "150px",
                              marginLeft: "90px",
                              marginTop: "30px",
                            }}
                          >
                            <Button
                              sx={{ borderRight: "1px solid gray" }}
                              onClick={() =>
                                items.itemCount > 1
                                  ? dispatch(decrease(items))
                                  : handleConfirm(items)
                              }
                            >
                              <RemoveIcon />
                            </Button>
                            <Typography
                              sx={{
                                marginX: "10px",
                                fontWeight: "bold",
                                marginTop: "5px",
                              }}
                            >
                              {items.itemCount}
                            </Typography>
                            <Button
                              sx={{ borderLeft: "1px solid gray" }}
                              onClick={() => dispatch(add(items))}
                            >
                              <AddIcon />
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: "400px",
                    width: "380px",
                    border: "1px solid gray",
                    marginTop: "100px",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        marginY: "40px",
                        fontWeight: "bold",
                        fontSize: "25px",
                      }}
                    >{`Total products : ${headerCount}`}</Typography>
                    <Typography
                      sx={{
                        marginY: "40px",
                        fontWeight: "bold",
                        fontSize: "25px",
                      }}
                    >{`Total Price : ${totalPrice}`}</Typography>
                    <Link to={"/proccedToPay"}>
                      <Button
                        sx={{
                          border: "1px solid gray",
                          backgroundColor: "darkred",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        onClick={() => dispatch(remove())}
                      >
                        Procced To Buy
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CartPage;
