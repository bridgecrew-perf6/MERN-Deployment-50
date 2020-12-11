import  React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { navigate } from '@reach/router';

    
    
const ProductForm = props => {
    const { initialTitle, initialPrice, initialDescription,onSubmitProp ,button_fucction} = props;
    // console.log(props);
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const [functionName, setFunction] = useState(button_fucction);


    const handelClick = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("");
        setPrice(10);
        setDescription("");
        navigate("/productes")
    };

    return (
        <div className="container mt-5 ">
            <form className='centered align-center' onSubmit={handelClick}>
                <h1 className="mb-3">Product Manager</h1>
                <div className="form-group row  ml-3 rounded border col-sm-4 bg-light">
                    <label className="col-sm-12 col-form-label text-muted">Title 
                        <input type="text" className='ml-3 rounded border ' onChange={e => setTitle(e.target.value)} value={title}/>
                    </label>
                </div>
                <div className="form-group row  ml-3 rounded border col-sm-4 bg-light" >
                    <label className="col-sm-12 col-form-label text-muted">Price
                        <input type="number" min='10' className='ml-3 rounded border ' onChange={e => setPrice(e.target.value)} value={price}/>
                    </label>
                </div>
                <div className="form-group row  ml-3 rounded border  col-sm-4 bg-light" >
                    <label className="col-sm-12 col-form-label text-muted">Description
                        <input type="text" className='ml-3 rounded border ' onChange={e => setDescription(e.target.value)} value={description}/>
                    </label>
                </div>
                <input type="submit" value={functionName} className="btn btn-info"/>
            </form>
        </div>
    );
};
export default ProductForm;
