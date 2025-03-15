import { useState, useEffect } from "react";
import "./stock.css";

export default function StockPage() {
  const [openingStock, setOpeningStock] = useState<number>(0);
  const [production, setProduction] = useState<number>(0);
  const [dispatch, setDispatch] = useState<number>(0);
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      openingStock,
      production,
      totalInStock,
      dispatch,
      quantitiesRemaining,
      closingStock,
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Stock Control Form</h1>
        <label className="label" htmlFor="openingStock">Opening Stock</label>
        <input
          className="input"
          type="number"
          id="openingStock"
          value={openingStock}
          onChange={(e) => setOpeningStock(Number(e.target.value))}
          required
        />
        <label className="label" htmlFor="production">Production</label>
        <input
          className="input"
          type="number"
          id="production"
          value={production}
          onChange={(e) => setProduction(Number(e.target.value))}
          required
        />
        <label className="label" htmlFor="totalInStock">Total in Stock</label>
        <input
          className="input"
          type="number"
          id="totalInStock"
          value={totalInStock}
          readOnly
        />
        <label className="label" htmlFor="dispatch">Dispatch</label>
        <input
          className="input"
          type="number"
          id="dispatch"
          value={dispatch}
          onChange={(e) => setDispatch(Number(e.target.value))}
          required
        />
        <label className="label" htmlFor="quantitiesRemaining">Quantities Remaining</label>
        <input
          className="input"
          type="number"
          id="quantitiesRemaining"
          value={quantitiesRemaining}
          readOnly
        />
        <label className="label" htmlFor="closingStock">Closing Stock</label>
        <input
          className="input"
          type="number"
          id="closingStock"
          value={closingStock}
          readOnly
        />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
}