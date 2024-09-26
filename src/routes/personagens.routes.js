const personagens = [
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

    app.get("/personagens",(req,res) => {
        return res.status(200).send( personagens )
        })