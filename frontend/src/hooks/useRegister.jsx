import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/user";
import { BASE_URL } from "../api";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Register = async (username, email, password, usercode) => {
    setIsLoading(true);

    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, usercode }),
    });

    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      localStorage.setItem("Anonymous", JSON.stringify(data));
      dispatch(registerUser(data));
      setIsLoading(null);
      navigate("/");
    }
  };

  return { Register, error, isLoading };
};
