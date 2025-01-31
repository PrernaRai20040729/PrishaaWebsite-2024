import { useState,useContext } from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import{
    FaFacebook,
    FaTwitter,
    FaInstagram,
    
    FaPinterest,
    FaCartPlus,

} from "react-icons/fa";
import prod from"../../assets/products/bg.jpg";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import { Context } from "../../utils/context";


const SingleProduct = () => {
    const [quantity,setQuantity]=useState(1);
    const {id} = useParams();
    const {data} = useFetch (`/api/products?populate=*&[filters][id]=${id}`);
    const {handleAddToCart} = useContext(Context);
    const increment = () =>{
        setQuantity ((prevState) => prevState + 1);
    }
    const decrement = () =>{
        setQuantity ((prevState) => {
            if (prevState ===1) return 1;
            else return prevState -1;
            
        });
    }
    if (!data) return;
    const product=data.data[0].attributes
    
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="Product Image" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8377;{product.price}</span>
                    <span className="d">{product.description}</span>
                    <div className="cart-buttons">
                        <div className="qbuttons">
                            <span onClick={decrement}> - </span>
                            
                            <span> {quantity} </span>
                            
                            <span onClick={increment}> + </span>
                        </div>
                        <button className="atcbutton" onClick={() =>{
                            handleAddToCart(data.data[0],quantity);
                            setQuantity(1);
                        }}>
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>





                    </div>
                    <span className="divider"/>
                    <div className="info">
                        <span className="text-bold">
                            Category:
                            <span>{product.categories.data[0].attributes.title}</span>

                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaTwitter size={16}/>
                                <FaFacebook size={16}/>
                                <FaInstagram size={16}/>
                                
                                <FaPinterest size={16}/>
                                </span>
                        </span>    
                        
                    </div>


                </div>
            </div>
            <RelatedProducts productId={id} categoryId={product.categories.data[0].id}/>
        </div>
    </div>;
};

export default SingleProduct;
