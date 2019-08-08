import React from "react";
// import { inventory } from "./";

function Table(props) {
  function renderHead() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>PRODUCT</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
    );
  }
  function renderBody() {
    return <body />;
  }
  return (
    <div>
      <table className="table">{renderHead()}</table>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
}
export default Table;
