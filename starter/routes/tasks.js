const express = require('express')
const router = express.Router()

const { getAllTasks, createNewTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/').get(createNewTask)
router.route('/:id').get(getTask)
router.route('/:id').get(updateTask)
router.route('/:id').get(deleteTask)

module.exports = router