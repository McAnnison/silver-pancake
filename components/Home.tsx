"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; 
import "../styles/home.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignIn = () => {
    if (!email || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    //API call for sign-in
    setTimeout(() => {
      setLoading(false);

      // Redirect based on role
      switch (role) {
        case "Worker":
          router.push("/pages/StockPage"); 
          break;
        case "CEO":
          router.push("/pages/AdminDashboard"); 
          break;
        case "Factory Supervisor":
          router.push("/pages/supervisor"); 
        case "Field Manager":
          router.push("/pages/fieldManager"); 
        default:
          setError("Invalid role selected.");
      }
    }, 1000);
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1 className="logo">SDK ALKALINE WATER</h1>
        <p className="motto">Change your water, Change your life</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="card"
      >
        <div className="tabs">
          <button
            type="button"
            aria-label="Sign In"
            className={`tab-button ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {activeTab === "signin" && (
          <div className="tab-content">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select className="input" value={role} onChange={handleRoleChange}>
              <option value="">Select Role</option>
              <option value="CEO">CEO</option>
              <option value="Field Manager">Field Manager</option>
              <option value="Administrator">Administrator</option>
              <option value="Factory Supervisor">Factory Supervisor</option>
              <option value="Worker">Worker</option>
            </select>
            <button
              type="button"
              className="button"
              onClick={handleSignIn}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        )}
      </motion.div>
      <p className="signup-link">
        Don&apos;t have an account?{" "}
        <a href="#" onClick={() => setActiveTab("signup")}>
          Sign up
        </a>
      </p>
    </div>
  );
}