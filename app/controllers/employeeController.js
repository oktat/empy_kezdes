import Employee from '../models/employee.js'


const EmployeeController = {
  async index(req, res) {

    try {
      const emps = await Employee.findAll()
      res.status(200)
      res.json({
        data: emps
      })
    } catch (error) {
      res.status(500)
      res.json({
        message: 'Hiba'
      })
    }

  },
  async store(req, res) {
    try {
      const emp = await Employee.create(req.body)
      res.status(201)
      res.json({
        success: true,
        data: emp
      })
    } catch (error) {
      res.status(500)
      res.json({
        message: 'Hiba'
      })
    }
  },
  async update(req, res) {
    try {
      const emp = await Employee.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: emp
      })
    } catch (error) {
      res.status(500)
      res.json({
        message: 'Hiba'
      })
    }
  },
  async destroy(req, res) {
    try {
      const emp = await Employee.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: emp
      })
    } catch (error) {
      res.status(500)
      res.json({
        message: 'Hiba'
      })
    }
  }
}

export default EmployeeController