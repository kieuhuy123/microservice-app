import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector((state) => state.userReducer.token);

  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const decoded = jwtDecode(token);

    const { exp, _id: userId, email, roles } = decoded;
    if (userId) {
      localStorage.setItem("userId", JSON.stringify({ userId }));
    }
    // isAdmin = roles.includes(9999);

    // if (isAdmin) status = "Admin";

    return { userId, email, roles, token, status, isAdmin, exp };
  }

  return { userId: "", email: "", roles: [], isAdmin, status, exp: "" };
};

export default useAuth;
