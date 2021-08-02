import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ListaLibros from './components/ListaLibros';
import Form from './components/Form';


function App() {

  //crea un nuevo estado con la estructura de un libro para luego usarlo en el formulario
  const [libro, setLibro] = useState({
    TituloLibro: '',
    Autor: '',
    Edicion:0
  })

  const [listaModificada, setListaModificada] = useState(false)
  
  
  //para listar todos los libros apenas inicie la app
  const [libros, setLibros] = useState([])
  useEffect(() => {
    const getLibros = ()=>{
        fetch('http://localhost:9000/api')
        .then(res =>res.json())
        .then(res => setLibros(res))
    }
    getLibros()
    setListaModificada(false)
  }, [listaModificada])


  return (
   <Fragment>
     <Navbar brand = 'Librería'/>
     <div className="container">
       <div className="row">
         <div className="col-7">
           <h2 style = {{textAlign: 'center' }}>Lista de Libros</h2>
            <ListaLibros libro = {libro} setLibro = {setLibro} libros = {libros} setListaModificada = {setListaModificada}/>
         </div>
         <div className="col-5">
         <h2 style = {{textAlign: 'center', margin: '15px'}}>Formulario de libro</h2>
         <Form libro = {libro} setLibro={setLibro}/>
         </div>
       </div>
     </div>
   </Fragment>
  );
}

export default App;
