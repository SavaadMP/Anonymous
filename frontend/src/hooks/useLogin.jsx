import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user";
import { BASE_URL } from "../api";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      localStorage.setItem("Anonymous", JSON.stringify(data));
      dispatch(loginUser(data));
      setIsLoading(false);
      setError(null);
      navigate("/");
    }
  };

  return { isLoading, error, login };
};
