const cityRepository = require('../repository/cityRepository');
class CityController {
    
    async teste(req, res)  { 
       try{
        return res.status(400).send({message: 'deu certo'})    
       }catch(err){
           return res.status(400).send({error: 'deu ruim'})
       }
       
    }
    
    async criarCidade(req, res){
        const { nome } = req.body;
        try{ 
            if(await cityRepository.findOne({nome}))
            return res.status(400).send({error: 'Cidade já registrada!'})

            const city = await cityRepository.create(req.body);
            await city.save()
            return res.json({city,});
        }catch(err){
            
            return res.status(400).send({error: 'Erro ao registrar Cidade!'})
        }
    }

    async buscarCidade(req, res){   
        try{
           const cidades = await cityRepository.find();
           res.json(cidades);
        }catch(err){
            return res.status(400).send({ error: 'Erro ao tentar localizar'});
        }
    }

    async buscarNomeCidade(req, res){
        const {nome, cidade} = req.body;
        try{
            if(!nome) return res.send({error: 'Falta nome'});
            const cidades = await cityRepository.findOne({nome: req.body.nome});
            res.json(cidades);

        }catch{
            return res.status(400).send({ error: 'Erro ao tentar localizar por nome'});
        }

    }

    async buscarNomeEstado(req, res){
        
        try{
            // if(!estado) return res.send({error: 'Falta estado'});
            // console.log('estado:', estado)
            const cidades = await cityRepository.findOneEstado({estado: req.body.estado});
            res.json(cidades);

        }catch{
            return res.status(400).send({ error: 'Erro ao tentar localizar por estado'});
        }

    }

    async deletarCidade(req, res){
        try{
            
         await cityRepository.findByIdAndRemove({_id: req.body._id})   
         return res.status(200).send({message: 'Cidade foi deletada, com sucesso!'})
        }catch{
           return res.status(400).json({message: 'Nenhuma cidade encontrada!'})
        }
    }

    async atualizarCidade(req, res){     
        try{
            const id = req.params.id;
            const updates = req.body;
            
            const result = await cityRepository.findOneAndUpdate(id,updates);
            console.log('results:', result);
            res.send(result);
        
 
        }catch{
            
            return res.status(400).json({message: 'Não foi possivel atualizar cidade!'})
        }
    }

    

}


module.exports = new CityController();