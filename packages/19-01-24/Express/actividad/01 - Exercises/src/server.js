const express = require("express");

let publications = [];

const server = express();


server.use(express.json());


server.post( '/posts', req, res  => {
    const { author, title, contents } = req.body;

    if (!author || !title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" });
    }

    const newPost = {
        id: Date.now(),
        author,
        title,
        contents
    };

    publications.push(newPost);

    res.json(newPost);

});

app.get('/posts/:author', (req, res) => {
    const author = req.params.author;

    const filteredPosts = publications.filter(post => post.author === author);

    if (filteredPosts.length === 0) {
        return res.status(404).json({ error: "No existe ninguna publicación del autor indicado" });
    }

    res.json(filteredPosts);
});

app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;

    const postToUpdate = publications.find(post => post.id === parseInt(postId));
    if (!postToUpdate) {
        return res.status(404).json({ error: "No se recibió el id correcto necesario para modificar la publicación" });
    }

    const { title, contents } = req.body;

    if (!title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" });
    }

    postToUpdate.title = title;
    postToUpdate.contents = contents;

    res.json(postToUpdate);
});

app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;

    const postToUpdate = publications.find(post => post.id === parseInt(postId));
    if (!postToUpdate) {
        return res.status(404).json({ error: "No se recibió el id correcto necesario para modificar la publicación" });
    }

    const { title, contents } = req.body;

    if (!title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" });
    }

    postToUpdate.title = title;
    postToUpdate.contents = contents;

    res.json(postToUpdate);
});

app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;

    if (!postId) {
        return res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" });
    }

    const index = publications.findIndex(post => post.id === parseInt(postId));
    if (index === -1) {
        return res.status(404).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" });
    }

    publications.splice(index, 1);

    res.json({ success: true });
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
