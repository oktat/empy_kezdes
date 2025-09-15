import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'

const Employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  salary: {
    type: DataTypes.DOUBLE,
    defaultValue: 0
  }
})

sequelize.sync({
  alter: true
})

export default Employee
