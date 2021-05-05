const router = require('express').Router();

let Goal = require('../models/goal.model');

router.route('/').get((req, res) => {
  Goal.find()
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/show').get((req, res) => {
  Goal.findOne({ title: req.body.title })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const goal = req.body.title;

  const newGoal = new Goal({goal});

  newGoal.save()
    .then(() => res.json('Goal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) => {
  Goal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Goal deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;