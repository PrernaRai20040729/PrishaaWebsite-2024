import "./Product.scss";
import {useNavigate} from "react-router-dom";
const Product = ({ id, data }) => {
  const imageUrl = data?.img?.data?.[0]?.attributes?.url 
    ? process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url 
    : '';
    const navigate =useNavigate();

  return (
    <div className="product-card" onClick={() => navigate("/product/"+id)}>
      <div className="thumbnail">
        {imageUrl ? <img src={imageUrl} alt="Product Image" /> : <div>No Image Available</div>}
      </div>
      <div className="detail">
        <span className="name">{data?.title ? `${data.title}` : "Product Name"}</span>
        <span className="price">{data?.price ? `₹${data.price}` : "Product Price"}</span>
      </div>
    </div>
  );
};

export default Product;



{/*import "./Product.scss";

const Product = ({id,data}) => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />

        </div>

            <div className="detail">
                <span className="name">Product name</span>
                <span className="price">&#8377;Product Price</span>

            </div>
        
    </div>;
};

export default Product;
*/}
