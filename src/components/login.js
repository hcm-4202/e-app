import { Box, Button, TextField, Typography } from "@mui/material";
import {  useState } from "react";
import {  Navigate,  useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "../store/appSlice";

function Login() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({ userName: "", password: "" });
  const navigate = useNavigate();
  function handleChange(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleClick() {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: user.userName,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", user.userName);
        dispatch(addToken(localStorage.getItem("token")))
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("incorrect UserName and password");
      });
  }
  if (localStorage.token) {
    return <Navigate to="/home" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "86vh",
      }}
    >
      <Box
        sx={{
          border: "2px solid black",
          height: "350px",
          width: "300px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "25px", fontWeight: "bold", paddingTop: "10px" }}
        >
          Login
        </Typography>
        <Box sx={{ paddingY: "50px" }}>
          <TextField
            label="UserName"
            variant="outlined"
            size="small"
            name="userName"
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box sx={{ paddingBottom: "40px" }}>
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            name="password"
            type="password"
            onChange={(e) => handleChange(e)}
          />
        </Box>{" "}
        <br />
        <Button
          sx={{
            border: " 1px solid black",
            paddingX: "20px",
            backgroundColor: "lightseagreen",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
export default Login;
