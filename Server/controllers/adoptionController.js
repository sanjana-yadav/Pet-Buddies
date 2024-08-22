const Adoption = require("../models/Adoption");

exports.getAll = async (req, res) => {
    try {
      const adoptions = await Adoption.find();
      res.json(adoptions);

    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
};

exports.getOne = async (req, res) => {
    try {
      const { id } = req.params
      const adoptions = await Adoption.findById(id);
      res.json(adoptions);
      
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
};
 
exports.create = async (req, res) => {
    try {
      const { firstName, lastName, email, address, phone, pet } = req.body;
  
      const created = await Adoption.create({
        firstName,
        lastName,
        email,
        address,
        phone,
        pet,
      });
      res.json({ message: "Adoptions successfuly created.", created });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, address, phone, pet } = req.body;

    try {
      const created = await Adoption.findByIdAndUpdate(id, {
        firstName,
        lastName,
        phone,
        email,
        address,
        pet,
      });
      res.json({ message: "Adoptions successfuly updated.", created });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
};

exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Adoption.findByIdAndDelete(id);
      res.json({ message: "Adoption succesfuly deleted", deleted });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
};