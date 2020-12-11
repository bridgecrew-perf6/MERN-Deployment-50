import React, { useEffect, useState } from 'react';
import ShowList from './components/ShowList';
import ProductForm from './components/ProductForm';
import ProductDetiles from './components/ProductDetiles';
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.css';
import { Router ,Link ,navigate } from '@reach/router';



function App() {
    return (  
        <div className="App">

            <Router>
                <ShowList path="/productes" />
                <EditProduct path="/edit/:_id" />
                <ProductDetiles path="/view/:_id" />
            </Router>

        </div>
    );
}

export default App;
