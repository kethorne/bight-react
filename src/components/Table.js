import React from "react";
// import { inventory } from "./";

function Table() {
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
  return <table className="table">{renderHead()}</table>;
}
export default Table;
