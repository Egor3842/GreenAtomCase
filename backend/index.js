if (process.env.NODE_ENV !== 'production')
	require('dotenv').config()

const { get_user, get_position } = require('./dbconnector')
const hashing = require('./hashing')
const express = require('express')
const cors = require('cors')
const app = express()
const dbconnect = require('./dbconnector')
const port = process.env.EXPRESS_PORT || 9000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
	origin: "http://localhost:3000"
}))

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.post('/api/login', (req, res) => {
	get_user(req.body.email, hashing(req.body.email, req.body.password), async (err, result) => {
		await result
		if (err)
			res.status(500).send({error_message: "Невозможно подключиться к БД", error_flag: true})
		res.status(200).send(result ? result : {empty: true})
	})
})

app.listen(port, _ => {
	console.log(`Сервер запущен по адресу: http://localhost:${port}`)
})