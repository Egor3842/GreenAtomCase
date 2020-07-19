'use strict'
const legacy = require('../config/dbconfig')
const pool = require('../config/db2config')

const { login_sql, get_user_name_sql,
	get_tasks_sql, insert_plan_sql,
	insert_task_sql, update_plan_sql,
	update_task_sql, delete_plan_sql,
	delete_task_sql, entriesOnPage } = require('./resources')

const methods = {
	login: async (email, password) => {
		const [rows] = await pool.query(login_sql, [email, password])
		return rows[0]
	},
	get_tasks: async plan_id => {
		const [rows] = await pool.query(get_tasks_sql, [plan_id])
		return rows
	},
	get_plans: async (sql, user_id, page) => {
		let obj = []
		if (user_id)
			obj.push(user_id)
		if (page) {
			obj.push(page * entriesOnPage - entriesOnPage + 1)
			obj.push(entriesOnPage)
		}
		let [rows] = await pool.query(sql, obj)
		if (!rows[0] || !rows[0].hr_id || !rows[0].super_id)
			return []
		await Promise.all(rows.map(async element => {
			let [hr_rows] = await pool.query(get_user_name_sql, [element.hr_id])
			let [super_rows] = await pool.query(get_user_name_sql, [element.super_id])
			element.hr = hr_rows[0].name
			element.super = super_rows[0].name
			return element
		}))
		return rows
	},
	get_dict: async (sql, role_id) => {
		const [rows] = await pool.query(sql, role_id ? [role_id] : undefined)
		return rows
	},
	insert_plan: async data => {
		await pool.query(insert_plan_sql, [
			data.worker_id,
			data.position_id,
			data.super_id,
			data.hr_id,
			data.date_start,
			data.date_end,
			data.result,
			data.grade_id,
			data.comment
		])
	},
	insert_task: async data => {
		await pool.query(insert_task_sql,
		[
			data.plan_id,
			data.name,
			data.content,
			data.date_start,
			data.date_end,
			data.result
		])
	},
	update_plan: async data => {
		await pool.query(update_plan_sql,
		[
			data.worker_id,
			data.position_id,
			data.super_id,
			data.hr_id,
			data.step_id,
			data.date_start,
			data.date_end,
			data.result,
			data.grade_id,
			data.comment,
			data.id
		])
	},
	update_task: async data => {
		await pool.query(update_task_sql,
		[
			data.plan_id,
			data.name,
			data.content,
			data.date_start,
			data.date_end,
			data.result,
			data.id
		])
	},
	delete_plan: async id => {
		await pool.query(delete_plan_sql, [id])
	},
	delete_task: async id => {
		await pool.query(delete_task_sql, [id])
	}
}

module.exports = methods
