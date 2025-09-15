import Sequalize from 'sequelize'

import { readFileSync } from 'fs'
const confPath = '../../config/default.json'
const fileUrl = new URL(confPath, import.meta.url)
const config = JSON.parse(readFileSync(fileUrl, 'utf-8'))

const sequalize = new Sequalize(
    config.db.name,
    config.db.user, 
    config.db.pass,
    {
        host: config.db.host,
        dialect: 'mariadb',
        dialectOptions: {}
    }
)

export default sequalize
