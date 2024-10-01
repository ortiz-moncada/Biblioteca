const Holders = require("../models/holders");

const getlistarholders = async (req,res) => {
    try{
        const { name,phone,document,email}= req.params;
        const holders = await Holders.find();
        res.json({ holders});

    }catch (error) {
        res.status(400).json({error: "La operacion no se realizo"});
        console.log (error);
    }
};

const getlistarholdersid = async (req,res) => {
    try{
        const { id } = req.params;
        const holders = await Holders.findById(id);
        res.json ({holders});
    }catch (error) {
        res.status(400).json({ error: "La operacion no se realizo"});
        console.log (error);

    }
};


const postholdersinsert = async (req,res) =>{
    try{
        const {name,phone,document,email} = req.body;
        const holders= new Holders({name,phone,document,email});
        await holders.save();
        res.json({holders})
    }catch(error){
        res.status(400).json({ error:"La operacion no se realizo"});
        console.log (error);
    }

};

const putholdersmodificar = async (req,res) =>{
    try{
        const { id} =req.params;
        const {name,phone,document,email}=  req.body;
        const holder = await Holders.findByIdAndUpdate(id,{name,phone,document,email});
        res.json(holder);
    }catch(error){
        res.status(400).json({ error: "La operacion no se realizo "});
        console.log (error)

    }
};

const putholdersactivar = async(req,res) => {
    try{
        const {id} = req.params;
        const holder =  await Holders.findById(id);
        res.json({holder});
    }catch(error){ 
        res.status(400).json({ error: "La operacion no se realizo "});
        console.log (error);
    }
};

const putholdersdesactivar= async (req,res)=>{
    try{
        const {id} = req.params;
        const holder= await Holders.findById(id);

res.json({holder})
    }catch(error){
        res.status(400).json({ error:"La operacion no se realizo"});
        console.log (error);
    }
}


module.exports = { 
    getlistarholders,
    getlistarholdersid,
    postholdersinsert,
    putholdersmodificar,
    putholdersactivar,
    putholdersdesactivar
};