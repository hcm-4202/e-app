import { Box, Typography } from "@mui/material";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { fetchAllProducts } from "../../utils";

function Home() {
  const [products, setProducts] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const fetchCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const result = await res.json();
    setCategorie(result);
  };
  useEffect(() => {
    fetchCategories();
    fetchAllProducts().then((res) => setProducts(res));
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "27px",
          marginLeft: "20px",
          color: "darkred",
        }}
        data-testid="testid"
      >
        Category
      </Typography>
      <Categories categorie={categorie} />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "27px",
          marginLeft: "20px",
          color: "darkgoldenrod",
        }}
      >
        Products
      </Typography>
      <CardComponent products={products} />
    </Box>
  );
}

export default Home;
