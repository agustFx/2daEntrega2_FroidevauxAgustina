import {useState, useEffect} from 'react';
import {consultarBDD} from '../assets/funciones.js'
import { Link } from 'react-router-dom';
const Home = () => {
   

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProductos = productos.map(prod => 
                <div className="card cardProducto" key={prod.id}>
                <img src={`./img/${prod.img}`} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{prod.nombre}</h5>
                  <p className="card-text">Contenido: {prod.contenido}</p>
                  <p className="card-text">Precio: ${prod.precio}</p>
                  <button className='btn btn-light'><Link className='nav-link' to={'/producto/${prod.id}'}>Ver Producto</Link></button>
                </div>
              </div>
                    
                    )
                    setProductos(cardProductos)
        })
        
    },[]);
    
    

    return (
        <div className='row'>
            {productos}
        </div>
       
    );
}

export default Home;
