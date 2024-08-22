const express = require("express");
const adoptionController = require("../controllers/adoptionController");

const router = express.Router();

//get all media
router.get("/all", adoptionController.getAll);
//get one media
router.get("/get/:id", adoptionController.getOne);


//post create new media
router.post("/create", adoptionController.create);

//post update new media
router.put("/update/:id", adoptionController.update);

//post delete a media
router.delete("/delete/:id", adoptionController.delete);

module.exports = router;
