import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer() {

  const [stocks,setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((resp) => resp.json())
    .then((data) => setStocks(data))
  }, [])

  const stocksToDisplay = stocks.map((stock) => (
    <Stock
    key = {stock.id}
    stock= {stock}
    handleClick = {addToPortfolio}
    />
  ))

  function addToPortfolio(stock){
    setPortfolio([...portfolio,stock])
  }
 
  const portfolioToDisplay = portfolio.map((port) => (
    <Stock
    key = {port.id}
    stock= {port}
    handleClick = {removeFromPortfolio}
    />
  ))

  function removeFromPortfolio(stock) {
    const stocksAfterDelete = portfolio.filter((port) => port.id !== stock.id)
    setPortfolio(stocksAfterDelete)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay = {stocksToDisplay} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioToDisplay ={portfolioToDisplay} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
