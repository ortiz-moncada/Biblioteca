
const Laptops = require ("../models/laptops");

const getlistarlaptos = async (req,res) =>{
    try{
        const laptops = await Laptops.find();
        res.json({laptops});
    }catch(error){
        res.status(400).json({ error: "la operacion se reralizo"});
        console.log (error);
    }
};

const getlistaridlaptos = async(req,res) =>{

    try{
        const {id} = req.params;
        const laptops = await laptops.find();
        res.json({laptops});

    }catch(error){
        res.status(400).json({ error: "La operacion no se realizo"});
        console.log (error);
    }
    
}


const postInsertarLaptops = async(req,res) => {
   
    try{
        const {marca,modelo,precio,id} = req.body;
        const laptops = new Laptops({marca,modelo,precio,id});
        await laptops.save();
        res.json({laptops});
    }catch(error){
        res.status(400).json({ error: "La operacion no se realizo"});
        console.log (error);
    }
};

const putModificarLaptops = async (req,res ) => {
    try{
        const {marca,modelo,precio,id} = req.body;
        const laptops = await Laptops.findByIdAndUpdate(id,{marca,modelo,precio},{new:true});
        res.json({laptops});

    }catch(error){
        res.status(400).json({ error: "La operacion no se realizo"});
        console.log (error);
    }

}; 


const putholdersactivarLaptops = async (req,res) => {
    try{
        const {id} = req.params;
        const laptops = await Laptops.findById(id);
        res.json({laptops});

    }catch(error){
            res.status(400).json({ error: "La operacion no se realizo"});
            console.log (error);
        }
};

const putDesactivarLaptops = async (req,res) =>{
    try{
        const {id} = req.params;
        const laptops = await Laptops.findByIdAndUpdate(id,{estado:0},{new:true});
        res.json({laptops});
    }catch(error){
        res.status(400).json({ error: "La operacion no se realizo"});
        console.log (error);
    }
};

// faltan los QRS que nose jsjsjs


module.exports= {
    getlistarlaptos,
    getlistaridlaptos,
    postInsertarLaptops,
    putModificarLaptops,
    putholdersactivarLaptops,
    putDesactivarLaptops,

};