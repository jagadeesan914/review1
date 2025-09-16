// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Ensure default accounts exist
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      const defaultUsers = [
        {
          email: "admin@test.com",
          password: "admin123",
          role: "admin",
        },
        {
          email: "user@test.com",
          password: "user123",
          role: "user",
        },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
      console.log("✅ Default accounts created:", defaultUsers);
    }

    // ✅ Load current logged-in user (if any)
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ Login function
  const login = (credentials) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Credentials given:", credentials);
    console.log("Users stored:", users);

    const foundUser = users.find(
      (u) =>
        u.email?.toLowerCase() === credentials.email?.toLowerCase() &&
        u.password === credentials.password &&
        u.role === credentials.role
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));

      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard"); // 👈 changed from /dashboard to /userpanel
      }
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ Register function
  const register = (credentials) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (
      users.some(
        (u) => u.email?.toLowerCase() === credentials.email?.toLowerCase()
      )
    ) {
      alert("Email already registered!");
      return false;
    }

    const newUser = {
      email: credentials.email,
      password: credentials.password,
      role: credentials.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Registered successfully as ${credentials.role}`);
    navigate("/login");
    return true;
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


