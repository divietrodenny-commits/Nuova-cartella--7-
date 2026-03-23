import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <main><h1>Caricando...</h1></main>;

    return (
        <main>
            <h1>Products ({products.length})</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ))}
        </main>
    );
}
