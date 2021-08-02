import React from 'react';

const ListaLibros = ({libro, setLibro, libros, setListaModificada}) => {
   
    const handleDelete = id => {
         //consulta
         const requestInit ={
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/'+ id, requestInit)
        .then(res =>res.text())
        .then(res => console.log(res))

        setListaModificada(true)

    }

    let{TituloLibro, Autor, Edicion} =libro
    const handleUpdate = id => {
        Edicion = parseInt (Edicion, 10)
        //validacion de los datos
        if(TituloLibro ==='' || Autor ==='' || Edicion <= 0){
            alert('Debe completar todos los campos')
            return
        }
          //consulta
          const requestInit ={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(libro)
        }
        fetch('http://localhost:9000/api/'+ id, requestInit)
        .then(res =>res.text())
        .then(res => console.log(res))

        setListaModificada(true)

         //reiniciando valores
         setLibro({
            TituloLibro: '',
            Autor: '',
            Edicion:0
        })
    }

    return (  
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Edición</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {libros.map(libro => (
                    <tr key={libro.idlibros}>
                        <td>{libro.idlibros}</td>
                        <td>{libro.TituloLibro}</td>
                        <td>{libro.Autor}</td>
                        <td>{libro.Edicion}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={()=> handleDelete(libro.idlibros)} className='btn btn-danger'>Eliminar</button>
                                
                            </div>
                            <div className='mb-3'>
                            <button onClick={()=> handleUpdate(libro.idlibros)} className='btn btn-dark'>Modificar</button>
                            </div>
                        </td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
}
 
export default ListaLibros;