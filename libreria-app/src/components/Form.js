import React from 'react';

const Form =({libro, setLibro}) =>{

    const handelChange = e => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        })
    }

    let{TituloLibro, Autor, Edicion} =libro
    const handleSubmit = e =>{
        Edicion = parseInt (Edicion, 10)
        //validacion de los datos
        if(TituloLibro ==='' || Autor ==='' || Edicion <= 0){
            alert('Debe completar todos los campos')
            return
        }

        //consulta
        const requestInit ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(libro)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res =>res.text())
        .then(res => console.log(res))

        //reiniciando valores
        setLibro({
            TituloLibro: '',
            Autor: '',
            Edicion:0
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="TituloLibro" className="form-label">Titulo:</label>
                <input value={TituloLibro} name="TituloLibro" onChange={handelChange} id="titulo" type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="Autor" className="form-label">Autor:</label>
                <input value={Autor} name="Autor" onChange={handelChange} id="autor" type="text" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="Edicion" className="form-label">Edición:</label>
                <input value={Edicion} name="Edicion" onChange={handelChange} id="edicion" type="number" className="form-control"></input>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}

export default Form;