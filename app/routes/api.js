import Router from 'express'
import EmployeeController from '../controllers/employeeController.js'

const router = Router()

router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.store)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

export default router
