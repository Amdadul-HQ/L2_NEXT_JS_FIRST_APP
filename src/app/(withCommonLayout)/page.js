import ProductCard from "../../components/prodeucts/ProductCard.jsx"
const HomePage = async() => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return (
    <main>
      <h1>Data Fetching, Caching, and Revalidating </h1>
      <div>
        {
          products.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </main>
  );
};

export default HomePage;