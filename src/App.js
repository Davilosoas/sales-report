"use client";

import { useState, useEffect } from "react";
import data from "./data/salesData.json";
import SalesChart from "./components/SalesChart";
import "./App.css";

export default function App() {
  const categories = Object.keys(data);

  const [category, setCategory] = useState(categories[0]);
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const firstProduct = Object.keys(data[category] || {})[0] || "";
    setProduct(firstProduct);
  }, [category]);

  useEffect(() => {
    const brands = data[category]?.[product] ?? {};
    const firstBrand = Object.keys(brands)[0] || "";
    setBrand(firstBrand);
  }, [category, product]);

  useEffect(() => {
    const series = data[category]?.[product]?.[brand] ?? [];
    setChartData(series);
  }, [category, product, brand]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Painel de Relatório de Vendas</h1>
        <p className="subtitle">Visualização interativa de dados de vendas</p>
      </header>

      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="category-select">Categoria</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-control"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="product-select">Produto</label>
          <select
            id="product-select"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="select-control"
            disabled={!Object.keys(data[category] || {}).length}
          >
            {Object.keys(data[category] || {}).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="brand-select">Marca</label>
          <select
            id="brand-select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="select-control"
            disabled={!Object.keys(data[category]?.[product] || {}).length}
          >
            {Object.keys(data[category]?.[product] || {}).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h2>Desempenho de Vendas</h2>
          <div className="chart-meta">
            {category && product && brand && (
              <span className="selected-filters">
                {category} › {product} › {brand}
              </span>
            )}
          </div>
        </div>
        <SalesChart data={chartData} />
      </div>
    </div>
  );
}
