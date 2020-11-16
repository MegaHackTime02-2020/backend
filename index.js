import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Teste Uber.");
});

app.get("/status", (req, res) => {
    res.send("Se há vagas e se não há vagas.");
});

app.listen(8080);
