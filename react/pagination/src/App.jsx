import { useState, useEffect } from "react";

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  const handlePageChange = (n) => {
    setCurrentPage(n)
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const goToBackPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return !products.length ? (<h1>No Products Found!</h1>) : (
    <div className="app">
      <h1>Pagination</h1>
      <div className="product-container">
        {products.slice(start, end).map(p => <ProductCard key={p.id} image={p.thumbnail} title={p.title} />)}
      </div>
      <div className="page">
        <button disabled={currentPage === 0} className="page-change" onClick={() => goToBackPage()}> 🔙 Back </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button className={"page-number" + (n === currentPage ? "active-page" : "")} key={n} onClick={() => handlePageChange(n)}>{n}</button>
        ))}
        <button disabled={currentPage === noOfPages - 1} className="page-change" onClick={() => goToNextPage()}> Next ⏭️ </button>
      </div>
    </div >
  )
}
export default App

const ProductCard = ({ image, title }) => {
  return <div className="product-card">
    <img src={image} alt={title} className="product-img" />
    <span className="product-title">{title}</span>
  </div>
}
