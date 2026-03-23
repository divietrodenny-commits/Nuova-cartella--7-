import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.id);
                setProduct(data);
            })
            .catch(() => navigate('/products'))
            .finally(() => setLoading(false));
    }, [id, navigate]);

    console.log('SingleProduct ID:', id);

    