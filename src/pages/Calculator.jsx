import React, { useState } from "react";
import "../styles/pages/Calculator.scss";

function Calculator() {
  const [type, setType] = useState("Landing Page");
  const [pages, setPages] = useState(1);
  const [includeMaps, setIncludeMaps] = useState(false);

  const baseCosts = {
    "Landing Page": 1500,
    "Сайт-портфолио": 2000,
    "Сайт-визитка": 1000,
    "Корпоративный сайт": 4000,
    "PWA (Прогрессивное веб-приложение)": 3000,
  };

  const pageCost = 500;
  const mapCost = 500;

  return (
    <div>
      <h1>Расчёт стоимости сайта</h1>

      <div className="type-pages">
        <label>Тип сайта:</label>
        <select name={type} onChange={(e) => setType(e.target.value)}>
        {Object.keys(baseCosts).map((siteType) => (
            <option key={siteType} value={siteType}>
              {siteType}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default Calculator;
