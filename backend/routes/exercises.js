let router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((request, response) => {
    Exercise.find()
    .then(exercises => response.json(exercises))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    let username = request.body.username;
    let description = request.body.description;
    let duration = Number(request.body.duration);
    let date = Date.parse(request.body.date);

    let newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => response.json('Exercise added'))
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;