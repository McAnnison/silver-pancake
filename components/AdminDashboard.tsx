"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components for UI Design
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f4f6f8;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #0277bd;
  color: white;
  padding: 20px;
  transition: 0.3s;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const MenuButton = styled.button`
  background: #0277bd;
  color: white;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: #01579b;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatNumber = styled.h2`
  margin: 10px 0;
  color: #0277bd;
`;

const WorkerList = styled.ul`
  margin-top: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

interface StockData {
  openingStock: number;
  production: number;
  dispatched: number;
  closingStock: number;
}

interface Worker {
  id: number;
  name: string;
}

// Admin Dashboard Component
const AdminDashboard: React.FC = () => {
  const [stock] = useState<StockData>({
    openingStock: 500,
    production: 200,
    dispatched: 300,
    closingStock: 400,
  });

  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    // Simulate fetching worker data
    setWorkers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Michael Johnson" },
    ]);
  }, []);

  const totalAvailable = stock.openingStock + stock.production;

  return (
    <Container>
      {/* Sidebar Menu */}
      <Sidebar>
        <h2>Admin Panel</h2>
        <MenuButton>Dashboard</MenuButton>
        <MenuButton>Stock Records</MenuButton>
        <MenuButton>Workers</MenuButton>
        <MenuButton>Settings</MenuButton>
        <MenuButton>Logout</MenuButton>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <h1>Stock Overview</h1>

        <StatsGrid>
          <StatCard>
            <h3>Opening Stock</h3>
            <StatNumber>{stock.openingStock} cartons</StatNumber>
          </StatCard>

          <StatCard>
            <h3>Production Today</h3>
            <StatNumber>{stock.production} cartons</StatNumber>
          </StatCard>

          <StatCard>
            <h3>Total Available</h3>
            <StatNumber>{totalAvailable} cartons</StatNumber>
          </StatCard>

          <StatCard>
            <h3>Dispatched</h3>
            <StatNumber>{stock.dispatched} cartons</StatNumber>
          </StatCard>

          <StatCard>
            <h3>Closing Stock</h3>
            <StatNumber>{stock.closingStock} cartons</StatNumber>
          </StatCard>
        </StatsGrid>

        {/* Workers List */}
        <WorkerList>
          <h3>Workers Present</h3>
          {workers.length > 0 ? (
            <ul>
              {workers.map((worker) => (
                <li key={worker.id}>{worker.name}</li>
              ))}
            </ul>
          ) : (
            <p>No workers present today.</p>
          )}
        </WorkerList>
      </MainContent>
    </Container>
  );
};

export default AdminDashboard;
