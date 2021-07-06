const userRepository = require('../repository/userRepository');
class UserController {
    
    async teste(req, res)  { 
       try{
        return res.status(400).send({message: 'deu certo'})    
       }catch(err){
           return res.status(400).send({error: 'deu ruim'})
       }
       
    }
    
    async criarUser(req, res){
        const { nome } = req.body;
        try{ 
            if(await userRepository.findOne({nome}))
            return res.status(400).send({error: 'Usuario já registrado!'})

            const usuario = await userRepository.create(req.body);
            await usuario.save()
            return res.json({usuario,});
        }catch(err){
            
            return res.status(400).send({error: 'Erro ao registrar usuario!'})
        }
    }

    async buscarUser(req, res){   
        try{
           const usuario = await userRepository.find();
           res.json(usuario);
        }catch(err){
            return res.status(400).send({ error: 'Erro ao tentar localizar usuario'});
        }
    }

    async buscarNomeUser(req, res){
        const {nome} = req.body;
        
        try{
            if(!nome) return res.send({error: 'Falta nome'});
            const nomes = await userRepository.findOne({nome: req.body.nome});
            res.json(nomes);

        }catch{
            return res.status(400).send({ error: 'Erro ao tentar localizar por nome'});
        }

    }

    // async buscarEstadp(req, res){
    //     const {nome, estado} = req.body;
    //     try{
    //         if(!estado) return res.send({error: 'Falta usuario'});
    //         const cidades = await userRepository.findOne({estado: req.body.estado});
    //         res.json(cidades);

    //     }catch{
    //         return res.status(400).send({ error: 'Erro ao tentar localizar por usuario'});
    //     }

    // }

    async deletarUser(req, res){
        
        try{
        await userRepository.findByIdAndRemove({_id: req.params.id})
        return res.status(200).send({message: 'Usuario foi deletada, com sucesso!'})
        }catch{
           return res.status(400).json({message: 'Nenhuma usuario encontrado!'})
        }
    }

    async atualizarUsuario(req, res){     
        try{
            const id = req.params.id;
            const updates = req.body;
            
            const result = await userRepository.findOneAndUpdate(id,updates);
            //console.log('results:', result);
            res.send(result);
        
 
        }catch{
            
            return res.status(400).json({message: 'Não foi possivel atualizar cidade!'})
        }
    }

    

}


module.exports = new UserController();