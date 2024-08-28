import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardComponent from "./home/CardComponent";

function CategoryDetails() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const fectchCategory = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    fectchCategory();
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          marginY: "30px",
          fontWeight: "bold",
          fontSize: "35px",
          color: "rebeccapurple",
        }}
      >
        {category.toUpperCase()}
      </Typography>
      <CardComponent products={products} />
    </Box>
  );
}
export default CategoryDetails;
