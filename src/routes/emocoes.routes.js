import { Router } from "express";

let emocoesRoutes = Router() 


let emocoes = [
    {
        id:1,
        nome: "Nojinho",
        cor: "Verde"
 },
 {
 id:2,
 nome: "Ansiedade",
 cor: "Laranja"
},
{
    id:3,
    nome: "Medo",
    cor: "Roxo"
}
]
//Rota para buscar todas as emoções
emocoesRoutes.get("/",(req,res) => {
    return res.status(200).send(emocoes)
    })

//criar nova emoção
    emocoesRoutes.post("/",(req,res) => {
        const { nome,cor } = req.body
        
        const novaEmocao = {
            id:emocoes.length + 1,
            nome: nome,
            cor: cor
        }

        emocoes.push(novaEmocao)
        return res.status(201).send( novaEmocao )
        });

        //Rota  para buscar uma emoção pelo id
        emocoesRoutes.get("/:id", (req,res) => {
const{id} = req.params;
//console.log(id);
const emocao = emocoes.find((emotion) =>emotion.id == id )

if (!emocao) {
return res.status(404).send ({
message: "Emoção não enconrada!",
});
}
return res.status(200).send({
message:"Emoção encontrada",
emocao,
});

});

emocoesRoutes.put("/:id",(req,res) => {
    const {id} = req.params;

    const emocao = emocoes.find((emotion) =>emotion.id == id )

    if (!emocao) {
        return res.status(404).send ({
        message: "Emoção não encontrada!",
        });
        }
        const {nome, cor} = req.body;
        emocao.nome = nome;
        emocao.cor = cor;

        return res.status(200).send({
            message: "Emoção atualizada!",
            emocao,
});
}); 

emocoesRoutes.delete("/:id", (req, res) => {
    const {id} = req.params;

    const emocao = emocoes.filter((emotion) =>emotion.id == id );

    if (!emocao) {
    return res.status(404).send({
        message: "Emoção nao encontrada",
        emocao,
    });
    }

    emocoes = emocoes.filter((emotion) => emotion.id != id)

    return res.status(200).send({
        message: "Emoção deletada",
        emocao,
    });

});

        export default emocoesRoutes;