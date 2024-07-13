import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products = { data: [] }, innerPage = false, headingText = "" }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products.data && products.data.length > 0 ? (
          products.data.map(item => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default Products;



{/*import "./Products.scss";
import Product from "./Product/Product";
const Products = ({products,innerPage,headingText}) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {products.data.map(item => (
                        <Product key={item.id} id={item.id} data={item.attributes} />
                    ))}
                    {/*<Product/>
                    
            
            
            

        </div>
    </div>;
};

export default Products;
*/}
