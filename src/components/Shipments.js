import React, { useState, useEffect } from "react";

function Shipments() {
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/shipments")
      .then(response => response.json())
      .then(shipmentData => setShipments(shipmentData));
  }, []);
  return (
    <div className="shipments-page">
      <p>Shipments</p>
      <pre>{JSON.stringify(shipments, null, 2)}</pre>
    </div>
  );
}

export default Shipments;
