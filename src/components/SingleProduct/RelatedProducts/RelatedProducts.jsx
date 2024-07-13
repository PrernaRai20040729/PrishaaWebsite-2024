import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ productId, categoryId }) => {
    const { data, loading, error } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}`);

    if (loading) return <div>Loading related products...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || !data.data || data.data.length === 0) return <div>No related products available</div>;

    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;

{/*import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({productId,categoryId}) => {
    const {data} = useFetch (`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}`);
    return (
    <div className="related-products">
            <Products headingText="Related Products" products={data}/>
    </div>
    );
};

export default RelatedProducts;*/}
