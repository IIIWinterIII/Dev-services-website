import React from "react";
import siteTypes from "../siteTypesForTables.js";
import "../styles/components/SiteTypesTable.scss";

const SiteTypesTable = () => {
  return (
    <table className="site-types-table">
      <caption>Сравнение типов сайтов</caption>
      <thead>
        <tr>
          <th>Тип сайта</th>
          <th>Особенности</th>
          <th>Преимущества</th>
          <th>Недостатки</th>
        </tr>
      </thead>
      <tbody>
        {siteTypes.map((site, index) => (
          <tr key={index}>
            <td>{site.type}</td>
            <td>{site.features}</td>
            <td>
              <ul>
                {site.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {site.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SiteTypesTable;
