import { Router } from "express"

const personagensRoutes = Router ()

let personagens = [
    {
    id: 100,
    nome: "Totoro",
    vivo: true
    },
    
    {
    id: 101,
    nome: "Edward Cullen",
    vivo: false
    },
    
    {
        id:102,
        nome: "Jade",
        vivo: true
    },
    
    {
        id:103,
        nome:"Mulan",
        vivo:true
    
    }
    ]

   personagensRoutes.get("/",(req, res) => {
    return res.status(200)
    .send(personagens)
   })

   personagensRoutes.post("/",(req,res) => {
    const { nome, vivo } = req.body;
    
    const novaPersonagem = {
        id:personagens.length + 1,
        nome: nome,
        vivo: vivo,
    };

    personagens.push(novaPersonagem);
    return res.status(201).send( novaPersonagem);
    });

    personagensRoutes.delete("/:id", (req, res) => {
        const {id} = req.params;
    
        const personagens = personagens.filter((person) =>person.id == id );
    
        if (!personagens) {
        return res.status(404).send({
            message: "Persoangem nao encontrado",
            personagens,
        });
        }
    
        personagens = personagens.filter((person) => person.id != id)
    
        return res.status(200).send({
            message: "Emoção deletada",
            personagens,
        });
    
    });

   export default personagensRoutes;