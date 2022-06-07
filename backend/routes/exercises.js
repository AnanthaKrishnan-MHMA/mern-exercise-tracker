const router = require('express').Router();
const Exercise = require('../model/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.json('Error : '+ err));
});

router.route('/add').post((req,res)=>{
    const username= req.body.username;
    const description= req.body.description;
    const duration= Number(req.body.duration);
    const date= Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    newExercise.save()
    .then(exercises => res.json("exercises added"))
    .catch(err => res.json('Error : '+ err));
})

module.exports = Exercise;