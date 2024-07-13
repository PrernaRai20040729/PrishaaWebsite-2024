import "./Category.scss";
import { useNavigate } from "react-router-dom";
import lehenga from "../../../assets/category/lehenga.png"
import gown from "../../../assets/category/gown.png"
import fusion from "../../../assets/category/fusion.png"
import saree from "../../../assets/category/saree.png"
import anarkali from "../../../assets/category/suit.png"
import bridal from "../../../assets/category/bridal.png"

const Category = ({categories}) => {
    
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
        <div className="categories">
        {categories && categories.data && categories.data.map((item) => (
        <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
            {item.attributes && item.attributes.img && item.attributes.img.data && item.attributes.img.data.attributes && (
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt={item.attributes.title && 'Category Image'} />
            
            )
            
             }
            <p>{item.attributes.title}</p>
            </div>
            
            ))}
            
            

           {/*{categories.data.map((item) =>(
            <div  key={item.id} className="category">
                
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""/>
                
                
            </div>
            ))}
            
             
            {/* 
             <div className="category">
                <img src={gown} alt="Gown"/>
                <p>Gown</p>
            </div>
            <div className="category">
                <img src={fusion} alt="Fusion"/>
                <p>Fusion</p>
            </div>
            <div className="category">
                <img src={saree} alt="Saree"/>
                <p>Saree</p>
            </div>
            <div className="category">
                <img src={anarkali} alt="Anarkali"/>
                <p>Anarkali</p>
            </div>
            <div className="category">
                <img src={bridal} alt="Bridal"/>
                <p>Bridal</p>
            </div>
            */}
        </div>
    </div>
    );
};

export default Category;
