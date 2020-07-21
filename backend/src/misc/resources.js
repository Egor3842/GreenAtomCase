'use strict'
const resources = {
	genericDbError: "Ошибка подключения к базе данных",
	dbError: msg => { return {error_message: msg, error_flag: true} },
	serverRunning: port => { return `Сервер запущен по адресу: http://localhost:${port}`},
	morganString: ':method :url :status :res[content-length] - :response-time ms',
	frontendOrigin: 'http://localhost:3000',
	entriesOnPage: 5,
	defaultExpressPort: 9000,

	inserted: {inserted: true},
	updated: {updated: true},
	deleted: {deleted: true},
	empty: {empty: true},

	loginSql: 'call sp_login(?, ?)',
	getPlansWorkerSql: 'call sp_get_plans_worker(?)',
	getTasksSql: 'select id, name, DATE_FORMAT(date_creation, "%d.%m.%Y") as date_creation, content, DATE_FORMAT(date_start, "%d.%m.%Y") as date_start, DATE_FORMAT(date_end, "%d.%m.%Y") as date_end, result from tasks where plan_id = ? limit ?, ?',
	getPlansSuperSql: 'call sp_get_plans_super(?, ?, ?)',
	getPlansHrSql: 'call sp_get_plans_hr(?, ?)',
	getDictGradesSql: 'select id, name from grades',
	getDictNamesSql: 'select id, name from users where role_id = ?',
	getDictStepsSql: 'select id, name from steps',
	getDictPositionsSql: 'select id, name from positions',
	insertPlanSql: 'insert into plans (worker_id,position_id,date_creation,super_id,hr_id,step_id,date_start,date_end,result,grade_id,comment) values (?,?,curdate(),?,?,1,?,?,?,?,?)',
	insertTaskSql: 'insert into tasks (plan_id,name,date_creation,content,date_start,date_end,result) values (?,?,curdate(),?,?,?,?)',
	updatePlanSql: 'update plans set worker_id = ?, position_id = ?, super_id = ?, hr_id = ?, step_id = ?, date_start = ?, date_end = ?, result = ?, grade_id = ?, comment = ? where id = ?',
	updateTaskSql: 'update tasks set plan_id = ?, name = ?, content = ?, date_start = ?, date_end = ?, result = ? where id = ?',
	updateTaskResultSql: 'update tasks set result = ? where id = ?',
	deletePlanSql: 'delete from plans where id = ?',
	deleteTaskSql: 'delete from tasks where id = ?',

	apiPath: '/api',
	loginPath: '/login',
	getPlansWorkerPath: '/get_worker_data',
	getTasksPath: '/get_tasks',
	getPlansSuperPath: '/get_plans_super',
	getPlansHrPath: '/get_plans_hr',
	getDictGradesPath: '/dict/grades',
	getDictNamesPath: '/dict/names',
	getDictStepsPath: '/dict/steps',
	getDictPositionsPath: '/dict/positions',
	insertPlanPath: '/insert/plan',
	insertTaskPath: '/insert/task',
	updatePlanPath: '/update/plan',
	updateTaskPath: '/update/task',
	updateTaskResultPath: '/update/task_result',
	deletePlanPath: '/delete/plan',
	deleteTaskPath: '/delete/task',

	dateConvertToMySql: date => { return date.split('.').reverse().join('-') }
}

module.exports = resources
