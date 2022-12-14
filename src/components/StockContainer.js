import React from "react";


function StockContainer({stocksToDisplay}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
