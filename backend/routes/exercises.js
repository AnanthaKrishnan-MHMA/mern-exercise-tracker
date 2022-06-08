const router = require('express').Router();
const Exercise = require('../model/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    newExercise.save()
        .then(() => res.json("exercises added"))
        .catch(err => res.json('Error : ' + err));
})

router.route('/name/:username').get((req, res) => {
    const { username } = req.params;
    Exercise.find({ username: username })
        .then(exercise => res.json(exercise))
        .catch(err => res.json('Error : ' + err));
});

router.route('/id/:id')
    .get((req, res) => {
        const { id } = req.params;
        Exercise.findById(id)
            .then(exercise => res.json(exercise))
            .catch(err => res.json('Error : ' + err));
    });
router.route('/edit/:id').put((req, res) => {
    const { id } = req.params;
    const { username, description, duration, date } = req.body;
    const updatedExercise = {
        username,
        description,
        duration,
        date
    };
    Exercise.findByIdAndUpdate(id, updatedExercise)
        .then(() => res.json('successfully updated'))
        .catch(err => res.json('Error : ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    const { id } = req.params;
    Exercise.findByIdAndDelete(id)
        .then(() => res.json('successfully deleted!'))
        .catch(err => res.json('Error : ' + err));
});

module.exports = router;