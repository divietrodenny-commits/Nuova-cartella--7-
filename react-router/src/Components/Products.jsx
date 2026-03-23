import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} />
                <p className="mt-3">Caricamento prodotti...</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="h2 mb-4">I nostri Prodotti</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map(product => (
                    <div key={product.id} className="col">
                        <div className="card h-100">
                            <img
                                src={product.image}
                                className="card-img-top p-3"
                                alt={product.title}
                                style={{
                                    height: '250px',
                                    width: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                            />
                            <div className="card-body">
                                <h6 className="card-title fw-bold">{product.title}</h6>
                                <p className="card-text text-muted small mb-3">{product.category}</p>
                                <p className="h5 fw-bold text-primary mb-3">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
