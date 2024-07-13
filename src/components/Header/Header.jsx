import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import{Context} from "../../utils/context";
import "./Header.scss";
const Header = () => {
    const [scrolled,setScrolled]= useState(false);
    const [showCart,setShowCart]= useState(false);
    const [showSearch,setShowSearch]= useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const handleScroll =() =>{
        const offset=window.scrollY;
        console.log(offset);
        if (offset>200){
            setScrolled(true);

        }else{
            setScrolled(false);


        }

    };
    useEffect(() =>{
        window.addEventListener("scroll",handleScroll);

    },[]);
    return (
     <>  
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" onClick={()=>navigate("/")}>PRISHAA</div>
            <div className="right">
                <FaSearch onClick={() => setShowSearch(true)}/>
                <span className="cart-icon"
                 onClick={() => setShowCart(true)}
                >
                <HiShoppingBag/>
                {!!cartCount && <span>{cartCount}</span>}
                </span>
                
                <FcLike/>

            </div>
        </div>


    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </> 
    );
};

export default Header;
