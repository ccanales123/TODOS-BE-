import Task from "../models/Tasks";

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'description', 'completed','created_at'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({tasks});
    } catch (e) {
        console.log(e);
    }
}

export async function createTask(req, res) {
    const { name, description } = req.body;
    try {
        let newTask = await Task.create({
            name,
            description
        }, {
            fields: ['name', 'description' ]
        });

        res.json({
            message: 'Task created successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task deleted successfully'
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { completed } = req.body;

    try {

        const task = await Task.findOne({
            attributes: [ 'id', 'name','description','completed'],
            where: { id }
        });

        const updatedTask = await task.update({ completed }, {  where: { id } });
        
        return res.json({
            message: 'Task updated successfully',
            updatedTask
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOneTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            attributes: [ 'id', 'name','description','completed'],
            where: { id }
        });
        res.json({task});
    } catch (e) {
        console.log(e);
    }
}

