import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.componenet";
import './shop.styles.scss';

const Shop = (props) => {
    const {products} = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
};

export default Shop;
