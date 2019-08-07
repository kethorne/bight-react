import React, { useState, useEffect } from "react";
import Table from "./Table";

function Inventory() {
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <div className="inventory-page">
      <h4>Inventory</h4>
      <Table />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Inventory;
