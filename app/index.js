import express from 'express'
import router from './routes/api.js'
import morgan from 'morgan'
import { readFileSync } from 'fs'

const fileUrl = new URL('../config/default.json', import.meta.url)
const config = JSON.parse(readFileSync(fileUrl, 'utf-8'))

const app = express()
const PORT = config.app.port || 8000

app.use(morgan('tiny'))
app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
