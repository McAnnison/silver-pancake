"use client";

import { useState } from "react";
import "./super.css";

interface Worker {
  id: number;
  name: string;
  present: boolean;
  salaryAllocated: boolean;
}

export default function SupervisorPage() {
  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, name: "John Doe", present: false, salaryAllocated: false },
    { id: 2, name: "Jane Smith", present: false, salaryAllocated: false },
    { id: 3, name: "Michael Johnson", present: false, salaryAllocated: false },
    { id: 4, name: "Sarah Williams", present: false, salaryAllocated: false },
  ]);

  const toggleAttendance = (id: number) => {
    setWorkers((prevWorkers) =>
      prevWorkers.map((worker) =>
        worker.id === id ? { ...worker, present: !worker.present } : worker
      )
    );
  };

  const allocateSalary = (id: number) => {
    setWorkers((prevWorkers) =>
      prevWorkers.map((worker) =>
        worker.id === id ? { ...worker, salaryAllocated: true } : worker
      )
    );
  };

  const allocateAllSalaries = () => {
    setWorkers((prevWorkers) =>
      prevWorkers.map((worker) =>
        worker.present ? { ...worker, salaryAllocated: true } : worker
      )
    );
  };

  return (
    <div className="supervisor-container">
      <h1 className="title">Supervisor Dashboard</h1>
      <div className="workers-list">
        {workers.map((worker) => (
          <div key={worker.id} className="worker-card">
            <h3 className="worker-name">{worker.name}</h3>
            <div className="worker-actions">
              <button
                className={`attendance-button ${worker.present ? "present" : "absent"}`}
                onClick={() => toggleAttendance(worker.id)}
              >
                {worker.present ? "Present" : "Absent"}
              </button>
              <button
                className={`salary-button ${worker.salaryAllocated ? "allocated" : ""}`}
                onClick={() => allocateSalary(worker.id)}
                disabled={!worker.present || worker.salaryAllocated}
              >
                {worker.salaryAllocated ? "Salary Allocated" : "Allocate 35 GHS"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="allocate-all-button" onClick={allocateAllSalaries}>
        Allocate Salaries for All Present Workers
      </button>
    </div>
  );
}