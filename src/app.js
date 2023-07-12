import express from 'express'
import { conn } from './db.js'
import { PORT } from './config.js'
const app = express()

app.get('/', async(req, res) => {
  const [rows] = await conn.query(`SELECT * FROM users`)
  res.json(rows )

})

app.get('/ping', async (req, res) => {
  const [result] = await conn.query(`SELECT "Hello World!" as RESULT`)
  console.log(result);
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await conn.query(`INSERT INTO users(name) VALUES ("John")`)
  res.json(result)
})

app.listen(PORT)
console.log(`listening on port ${PORT}`)