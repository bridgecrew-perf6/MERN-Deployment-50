import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link ,navigate } from '@reach/router';
import DeleteButton from './DeleteButton';
import ProductForm from './ProductForm';
    
    
const ShowList = props => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios.get("http://localhost:8000/api/products")
            .then(res => {setProduct(res.data)} )
            .catch(err => console.error(err));
    }

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
    const createProduct = newProduct => {
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then(res=>{
                // console.log(res.data)
                setProduct([...product, res.data.newProduct]);
                // console.log(product)
            })
        navigate("/productes")
    }


    return (

        <div className="row justify-content-center">
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="10" initialDescription="" button_fucction="Create"/>
            <ul className="text-center list-group list-group-flush"><h1>All Products:</h1>
                {
                    product.map(oneProduct => 
                        <li key={product._id} className="list-group-item"> 
                            <Link to={`/view/${oneProduct._id}`} className="text-dark">{oneProduct.title}</Link> 
                            <Link to={`/edit/${oneProduct._id}`} className="btn btn-outline-info btn-sm ml-2">Edit</Link>
                            <DeleteButton productId={oneProduct._id} successCallback={()=>removeFromDom(oneProduct._id)}/>
                        </li>
                    )
                }
            </ul>

        </div>
    );
};
export default ShowList;
