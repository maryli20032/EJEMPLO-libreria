const express = require('express');
const routes= express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('select * from libros', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/:id', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('select * from libros where idlibros = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('insert into libros set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('libro guardado')
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('delete from libros where idlibros = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('libro eliminado')
        })
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('update libros  set ? where idlibros = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('libro modificado')
        })
    })
})


module.exports = routes