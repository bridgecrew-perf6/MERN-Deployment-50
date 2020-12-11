import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
    
    
const ProductDetiles = props => {

    const [product, setProduct] = useState({});
    

    useEffect(() => {
        console.log(props._id);
        getProduct();
    }, [props._id]);

    function getProduct() {
        axios.get("http://localhost:8000/api/products/" + props._id )
            .then(res => {
                console.log(res);
                setProduct(res.data.product);
                console.log(res.data.product);
            }).catch(err => console.error(err));
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
            <div class="card">
                <div class="card-body">
                    <h4>{product.title}</h4>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>

            </div>
        </div>
    );
};
export default ProductDetiles;
