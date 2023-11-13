import { Router } from "express";


const studentsRoutes = Router();

studentsRoutes.get("/", (req, res) => {
   
    return res.status(200).send({message: "get all students"});
});
studentsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({message: `Get student with id ${id}`});
});

studentsRoutes.post("/", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send({ message: "falhou"})
    }
    return res.status(200).send({ message: `Estudante ${name}, do email ${email} tem a idade ${age}`})
});

studentsRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if(!name || !email || !age) {
        return res.status(400).send({ message: "Missing required informations" })
    }
    return res.status(200).send({ message: `Editou o id ${id}`})
})

export default studentsRoutes;