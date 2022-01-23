const getAllTasks = (req, res) => {
    res.send('all the tasks')
}

const createNewTask = (req, res) => {
    res.send('a new task')
}

const getTask = (req, res) => {
    res.send('single task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks, createNewTask, getTask, updateTask, deleteTask
}