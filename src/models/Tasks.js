import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Task = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

export default Task;