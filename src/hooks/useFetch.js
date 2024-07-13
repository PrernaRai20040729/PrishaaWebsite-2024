import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const makeApiCall = async () => {
            setLoading(true);
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        
        makeApiCall();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;

{/*import {useEffect,useState} from "react";
import {fetchDataFromApi} from "../utils/api";
const useFetch = (endpoint) =>{
    const [data,setData] = useState();
    useEffect( async() =>{
        makeApiCall();
        
    },[endpoint]);
    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    }
    return {data};
}
export default useFetch; */}