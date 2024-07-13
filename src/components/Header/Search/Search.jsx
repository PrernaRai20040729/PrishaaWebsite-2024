import { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/bg.jpg";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search"
                    value={query}
                    onChange={onChange}
                />
                <MdClose onClick={() => setShowSearch(false)}/>
            </div>
            <div className="scontent">
                <div className="sresult">
                    {data?.data?.map(item => (
                        <div key={item.id} className="sri" onClick={() =>{
                            navigate("/product/" + item.id);
                            setShowSearch(false);
                        }} >
                            <div className="imgcon">
                                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                            </div>
                            <div className="proddeet">
                                <span className="name">{item.attributes.title}</span>
                                <span className="des">{item.attributes.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;

{/*import { useState} from "react";
import {MdClose} from "react-icons/md";
import prod from "../../../assets/products/bg.jpg";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState ("");
    const navigate = useNavigate();
    const onChange = (e) => {
        setQuery(e.target.value);

    };
    let {data} = useFetch (`/api/products?populate=*&[filters][$contains]=${query}`);
    //let {data} = useFetch(`/api/products?populate=*&filters[$contains]=${query}`);
    if(!query.length){
        data = null;
    }
    return <div className="search-model">
        <div className="form-field">
            <input 
                type="text"
                autoFocus
                placeholder="Search"
                value={query}
                onChange={onChange}
            />
            <MdClose onClick={() => setShowSearch(false)}/>
        </div>
        <div className="scontent">
            <div className="sresult">
                {data?.data?.map(item =>
                    <div key={item.id} className="sri">
                    <div className="imgcon">
                            <img src={prod} alt=""/>
                    </div>
                    <div className="proddeet">
                        <span className="name">{item.attributes.title}</span>
                        <span className="des">{item.attributes.description}</span>
                        
                        

                        
                    </div>
                </div>
                )};
                
                <div className="sri">
                    <div className="imgcon">
                            <img src={prod} alt=""/>
                    </div>
                    <div className="proddeet">
                        <span className="name">Productname</span>
                        <span className="des">Productdes</span>
                        
                        

                        
                    </div>
                </div>
               
            </div>
        </div>
    </div>;

};
export default Search; */}
