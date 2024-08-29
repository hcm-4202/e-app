import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, decrease } from "../../store/appSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function CardComponent({ products }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shop.cartItem);
  let productCount = useSelector((state)=>state.shop.productCount)
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => {
        productCount =0
        {data.map((val) => {
          if (val.id === product.id) {
            productCount = val.itemCount
          }
        })}
        return (
          <Card
            sx={{
              width: "350px",
              margin: "20px",
              height: "400px",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/product/${product.id}`}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180px"
                width="200px"
                image={product.image}
                sx={{ objectFit: "contain" }}
              />
              <CardContent sx={{ height: "80px" }}>
                <Typography gutterBottom component="div">
                  {product.title}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                >{`Price :${product.price}`}</Typography>
              </CardContent>
            </Link>
            <CardContent>
      
              {productCount == 0 ? (
                <Button
                  sx={{ border: "1px solid gray" }}
                  onClick={() => dispatch(add(product))}
                >
                  Add to cart{" "}
                  <Typography sx={{ marginLeft: "5px", marginTop: "5px" }}>
                    <ShoppingCartOutlinedIcon />
                  </Typography>{" "}
                </Button>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid gray",
                    width: "150px",
                    marginLeft: "90px",
                  }}
                >
                  <Button
                    sx={{ borderRight: "1px solid gray" }}
                    onClick={() => dispatch(decrease(product))}
                  >
                    <RemoveIcon />
                  </Button>
                  <Typography
                    sx={{
                      marginX: "10px",
                      fontWeight: "bold",
                      marginTop: "5px",
                    }}
                    data-testid="test"
                  >
                    {productCount}
                  </Typography>
                  <Button
                    sx={{ borderLeft: "1px solid gray" }}
                    onClick={() => dispatch(add(product))}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default CardComponent;
