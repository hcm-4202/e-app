import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories(prop) {
  const { categorie } = prop;

  return (
    <Box sx={{ display: "flex" }}>
      {categorie.map((item) => {
        return (
          <Link style={{ textDecoration: "none" }} to={`/category/${item}`}>
            <Box
              sx={{
                height: "150px",
                width: "360px",
                backgroundColor: "lightgray",
                margin: "20px",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  height: "150px",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontStyle: "italic",
                  color: "#bc5771",
                }}
              >
                {item.toUpperCase()}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
export default Categories;
