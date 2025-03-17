"use client";

import { useState, useEffect } from "react";
import "./admin.css";

export default function AdminDashboard() {
  const [openingStock, setOpeningStock] = useState<number>(500);
  const [production] = useState<number>(200);
  const [dispatch] = useState<number>(300);
  const [totalInStock, setTotalInStock] = useState<number>(0);
  const [quantitiesRemaining, setQuantitiesRemaining] = useState<number>(0);
  const [closingStock, setClosingStock] = useState<number>(0);

  useEffect(() => {
    setTotalInStock(openingStock + production);
  }, [openingStock, production]);

  useEffect(() => {
    const remaining = totalInStock - dispatch;
    setQuantitiesRemaining(remaining);
    setClosingStock(remaining);
  }, [totalInStock, dispatch]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <button className="sidebar-button" onClick={() => setOpeningStock(openingStock + 100)}>Dashboard</button>
        <button className="sidebar-button">Stock Records</button>
        <button className="sidebar-button">Workers</button>
        <button className="sidebar-button">Settings</button>
        <button className="sidebar-button">Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1 className="header-title">Stock Overview</h1>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Opening Stock</h3>
            <p className="stat-number">{openingStock} cartons</p>
          </div>
          <div className="stat-card">
            <h3>Production Today</h3>
            <p className="stat-number">{production} cartons</p>
          </div>
          <div className="stat-card">
            <h3>Total in Stock</h3>
            <p className="stat-number">{totalInStock} cartons</p>
          </div>
          <div className="stat-card">
            <h3>Dispatch</h3>
            <p className="stat-number">{dispatch} cartons</p>
          </div>
          <div className="stat-card">
            <h3>Quantities Remaining</h3>
            <p className="stat-number">{quantitiesRemaining} cartons</p>
          </div>
          <div className="stat-card">
            <h3>Closing Stock</h3>
            <p className="stat-number">{closingStock} cartons</p>
          </div>
        </div>
      </div>
    </div>
  );
}