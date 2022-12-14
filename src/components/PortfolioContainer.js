import React from "react";


function PortfolioContainer({portfolioToDisplay}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioToDisplay
      }
    </div>
  );
}

export default PortfolioContainer;
