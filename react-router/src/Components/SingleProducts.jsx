import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Non trovato');
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(() => navigate('/products'))
            .finally(() => setLoading(false));
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-5">
                <h2>Prodotto non trovato</h2>
                <a href="/products" className="btn btn-primary">Prodotti</a>
            </div>
        );
    }

    return (
        <div className="py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <img
                        src={product.image}
                        className="img-fluid rounded shadow"
                        alt={product.title}
                        style={{ height: '400px', objectFit: 'contain' }} />
                </div>
                <div className="col-md-6">
                    <h1 className="h2 fw-bold mb-4">{product.title}</h1>
                    <p className="lead mb-4">{product.description}</p>
                    <h3 className="text-primary mb-3">${product.price}</h3>
                    <p><strong>Categoria:</strong> {product.category}</p>
                    <a href="/products" className="btn btn-primary">Torna ai Prodotti</a>
                </div>
            </div>
        </div>
    );
}
