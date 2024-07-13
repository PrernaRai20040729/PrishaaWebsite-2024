import "./Category.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";

const Category = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes.title}</div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;

{/*import "./Category.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
const Category = () =>{
    const {id} = useParams();
    console.log("Category ID:", id);
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    console.log("Fetch URL:", `/api/products?populate=*&[filters][categories][id]=${id}`);
    return (
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title">Category Title</div>
            <Products innerPage={true} produts={data}/>
        </div>
    </div>
    );
};
export default Category; */}