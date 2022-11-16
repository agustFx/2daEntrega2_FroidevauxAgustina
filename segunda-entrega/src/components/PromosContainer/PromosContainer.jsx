import {useState, useEffect} from 'react';
import Promos from '../Promos/Promos.jsx';
import {consultarBDD} from '../assets/funciones.js'
import { useParams } from 'react-router-dom';

const PromosContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()


    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                console.log(productsList)
                const cardPromos = Promos({productsList})
                setProductos(cardPromos)
            })
        } else {
            consultarBDD('./../json/productos.json').then(productsList => {
                const cardPromos = Promos({productsList})
                setProductos(cardPromos)
            })
        }
        
    },[category]);
    
    return (
        <div className='row'>
            {productos}
        </div>
       
    );
}

export default PromosContainer;