const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

server.post('/posts', (req, res) => {
    const { author, title, contents, id } = req.body;

    if (author && title && contents) {

        let publicacion = {
            author: author,
            title: title,
            contents: contents,
            id: id,
        }

        publications.push(publicacion);
        res.json(publicacion);
    } else {
        res.status(400).send({ error: "No se recibieron los parámetros necesarios para crear la publicación" })
    }
});

server.get(`/posts`, (req, res) => {
    const { author, title } = req.query;

    const t = publications.filter(
        pub => pub.author === author && pub.title === title
    );

    if (t.length > 0) {
        res.json(t);
    } else {
        res.status(400).json({ error: "No existe ninguna publicación con dicho título y autor indicado" });
    }
})

server.get(`/posts/:author`, (req, res) => {
    const { author } = req.params;

    const publi = publications.filter((publi) => publi.author == author);

    if (publi.length > 0) {
        res.json(publi)
    } else {
        res.status(400).json({ error: "No existe ninguna publicación del autor indicado" })
    }
})

server.put(`/posts/:id`, (req, res) => {
    const { id } = req.params;
    const { title, contents } = req.body;

    if (id && title && contents) {
        const y = publications.filter((publi) => publi.id == id)

        if (y.length > 0) {
            let yy = {
                title: title,
                contents: contents
            }
            res.json(yy)
        } else {
        res.status(400).json({ error: "No se recibió el id correcto necesario para modificar la publicación" })
        }
    } else {
        res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" })
    }
})


server.delete(`/posts/:id`, (req, res) => {
    const { id } = req.params;

    if (id) {
        const y = publications.filter((publi) => publi.id == id)

        if (y.length > 0) {
            publications.pop(y)

            res.json({ success: true })
        } else {
        res.status(400).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" })
        }
    } else {
        res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" })
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
