import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [role, setRole] = useState("user"); // default to user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Both admin & user login with email + password
    login({ email, password, role });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://worksion.com/wp-content/uploads/2021/07/Writing-about-professional-background-1024x682.jpg')`,
      }}
    >
      {/* Welcome Text */}
      <div className="text-white mb-6 text-center">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="mt-2 text-lg">
          Login to access your personalized job dashboard
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Role selection */}
        <div className="flex justify-center gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={role === "admin" ? "Admin Email" : "User Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;














