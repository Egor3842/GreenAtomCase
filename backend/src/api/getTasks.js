'use strict'
const express = require('express')
const router = express.Router()
const { dbError, genericDbError, empty,
	getTasksPath } = require('../resources')
const { getTasks } = require('../dbmethods')

router.get(getTasksPath, async (req, res) => {
	try {
		const result = await getTasks(req.query.plan_id, req.query.page)
		res.status(200).send(result[0] ? result : empty)
	} catch (ex) {
		console.error(ex)
		res.status(500).send(dbError(genericDbError))
	}
})

module.exports = router

