import { CategoriesContext } from "../../context/categories.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.componenet";
import './categories-preview.styles.scss';
import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = (props) => {
    const {categoriesMap} = useContext(CategoriesContext);
  return (

    <div className="category-preview-container">
    {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
    })}
    </div>
  )
};

export default CategoriesPreview;
