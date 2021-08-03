const express = require("express");
const router = new express.Router();

const challenges = require("../models/challenges");

//handling POST request
router.post("/challenges", async (req, res) => {
  try {
    const addChallengesRecords = new challenges(req.body);
    console.log(req.body);
    const insertChallenges = await addChallengesRecords.save();
    res.status(201).send(insertChallenges);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/challenges", async (req, res) => {
  try {
    const getChallenges = await challenges.find({});
    res.send(getChallenges);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/challenges/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getChallenges = await challenges.findById({ _id });
    res.send(getChallenges);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/challenges/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getChallenges = await challenges.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getChallenges);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/challenges/:id", async (req, res) => {
  try {
    const getChallenges = await challenges.findByIdAndDelete(req.params.id);

    res.send(getChallenges);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
