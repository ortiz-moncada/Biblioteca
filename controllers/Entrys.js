const Entrys =  require("../models/Entrys");




const getlistarEntyreHolders = async (req, res) => {
  try {
    const { id } = req.params;
    const entries = await Entrys.find({ holder: id });

    res.json({ entries });
  } catch (error) {
    res.status(400).json({ error: "La operación no se realizó" });
    console.log(error);
  }
};


const getListarEntyreDia = async (req, res) => {
  try {
    const { date } = req.query; 
    const entries = await Entrys.find({
      date: {$eq: new Date(date),},});

    res.json({ entries });
  } catch (error) {
    res.status(400).json({ error: "La operación no se realizó" });
    console.log(error);
  }
};


const getListarEentyreFecha= async (req, res) => {
  try {
    const { startDate, endDate } = req.query; 
    const entries = await Entrys.find({
      date: { $gte: new Date(startDate),$lte: new Date(endDate),},});

    res.json({ entries });
  } catch (error) {
    res.status(400).json({ error: "La operación no se realizó" });
    console.log(error);
  }
};

const postInsertEntyre = async (req, res) => {
    try {
      const { holder, date, description, amount } = req.body;
      const newEntry = new Entrys({holder,date,description,amount,});
  
      await newEntry.save();
      res.json({ message: "Entry created successfully", entry: newEntry });
    } catch (error) {
      res.status(400).json({ error: "La operación no se realizó" });
      console.log(error);
    }
  };

const putRejistrarSandE = async (req, res) => {
  try {
    const { entryId, status, deliveryDate } = req.body; 
    const entry = await Entrys.findById(entryId);

    if (!entry) {
      return res.status(404).json({ error: "Entry not found" });
    }

    entry.status = status;
    entry.deliveryDate = deliveryDate;

    await entry.save();
    res.json({ message: "Entry updated successfully", entry });
  } catch (error) {
    res.status(400).json({ error: "La operación no se realizó" });
    console.log(error);
  }
};

module.exports = {
    getlistarEntyreHolders,
    getListarEntyreDia,
    getListarEentyreFecha,
    postInsertEntyre,
    putRejistrarSandE,
 
};
