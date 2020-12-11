import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
    
    
const EditProduct = props => {

    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        // console.log(props._id);
        axios.get("http://localhost:8000/api/products/"+ props._id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            }).catch(err => console.error(err));
    }, [props._id]);

    const update = product => {
        console.log(product);
        axios.put("http://localhost:8000/api/products/"+ props._id, product)
            .then(res => {
                console.log(res);
                navigate("/productes");
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div>
            { loaded && (
                <>
                    <ProductForm
                        onSubmitProp={update}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        button_fucction="Edit"
                    />
                    <di className="row justify-content-center mt-2">
                        <DeleteButton productId={product._id} successCallback={() => navigate("/productes")} />
                    </di>
                </>
            )}
        </div>
    );
};
export default EditProduct;
