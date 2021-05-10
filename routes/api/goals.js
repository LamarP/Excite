const router = require('express').Router();
const GoalsController = require('../../controllers/goals');

router.get('/', async (req, res) => {
  const result = await GoalsController.index(req.query.userId);
  res.send(result);
});

router.get('/goal', async(req, res) => {
  const result = await GoalsController.getGoal(req.query.goalId);
  res.send(result);
});

router.post('/goal', (req, res) => {
 GoalsController.postGoal(req.body.title)
  .then(() => res.send({success:true}))
  .catch(() => res.status(422).json({msg: 'Could not create goal'}))
});

router.patch('/goal', (req, res) => {
  GoalsController.updateGoal(req.body.goalId, req.body.goal)
  .then(() => res.send({success: true}))
  .catch(() => res.status(422).json({msg: 'Could not find goal'}))
});

router.delete('/goal', (req, res) => {
  console.log(req)
  GoalsController.deleteGoal(req.query.goalId)
    .then(() => res.send({success: true}))
    .catch(() => res.status(404).json({msg: 'Could not find goal'}))
});

module.exports = router;