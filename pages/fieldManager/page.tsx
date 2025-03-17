"use client";

import { useState } from "react";
import "./field.css";

export default function FieldManagerPage() {
  const [cartonsSold, setCartonsSold] = useState<number>(0);
  const [customerName, setCustomerName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [totalCartonsSold, setTotalCartonsSold] = useState<number>(0);
  const [complaint, setComplaint] = useState<string>("");
  const [salesRecords, setSalesRecords] = useState<
    { customerName: string; location: string; cartonsSold: number }[]
  >([]);

  const handleAddSale = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !location || cartonsSold <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setSalesRecords((prevRecords) => [
      ...prevRecords,
      { customerName, location, cartonsSold },
    ]);
    setTotalCartonsSold((prevTotal) => prevTotal + cartonsSold);
    setCustomerName("");
    setLocation("");
    setCartonsSold(0);
  };

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaint) {
      alert("Please enter a complaint.");
      return;
    }
    alert(`Complaint submitted: ${complaint}`);
    setComplaint("");
  };

  return (
    <div className="field-manager-container">
      <h1 className="title">Field Manager Dashboard</h1>

      {/* Sales Form */}
      <form className="sales-form" onSubmit={handleAddSale}>
        <h2 className="form-title">Record Sales</h2>
        <div className="form-group">
          <label className="label" htmlFor="customerName">
            Customer Name
          </label>
          <input
            className="input"
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="location">
            Location
          </label>
          <input
            className="input"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="cartonsSold">
            Cartons Sold
          </label>
          <input
            className="input"
            type="number"
            id="cartonsSold"
            value={cartonsSold}
            onChange={(e) => setCartonsSold(Number(e.target.value))}
            required
          />
        </div>
        <button className="button" type="submit">
          Add Sale
        </button>
      </form>

      {/* Total Cartons Sold */}
      <div className="total-cartons">
        <h3>Total Cartons Sold Today: {totalCartonsSold}</h3>
      </div>

      {/* Sales Records */}
      <div className="sales-records">
        <h2 className="form-title">Sales Records</h2>
        {salesRecords.length > 0 ? (
          <ul>
            {salesRecords.map((record, index) => (
              <li key={index} className="record-item">
                <p>
                  <strong>Customer:</strong> {record.customerName}
                </p>
                <p>
                  <strong>Location:</strong> {record.location}
                </p>
                <p>
                  <strong>Cartons Sold:</strong> {record.cartonsSold}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No sales recorded yet.</p>
        )}
      </div>

      {/* Complaint Form */}
      <form className="complaint-form" onSubmit={handleSubmitComplaint}>
        <h2 className="form-title">Submit Complaint</h2>
        <div className="form-group">
          <label className="label" htmlFor="complaint">
            Complaint
          </label>
          <textarea
            className="input"
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}