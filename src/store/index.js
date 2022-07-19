import { createStore } from 'vuex'

const store = createStore({
	state: {
		tasks: []
	},
	getters: {
		tasks: state => state.tasks,
		activeTasks: state => state.tasks.filter(task => task.status === 'active'),
		task: state => id => state.tasks.find(task => task.id === id)
	},
	mutations: {
		addTasks(state, tasks) {
			state.tasks = tasks
		},
		addTask(state, task) {
			state.tasks.push(task)
		}
	},
	actions: {
		createNewTask({ commit, dispatch }, { title, description, date }) {
			const id = 't' + Math.ceil(Math.random() * 1000000000000)
			let status = 'active'
			if (Date.parse(date) < Date.now()) {
				status = 'cancelled'
			}
			const newTask = {
				id,
				title,
				description,
				date,
				status,
			}
			commit('addTask', newTask)
			dispatch('addTasksToLocalStorage')

			const tasks = JSON.parse(localStorage.getItem('tasks'))
			commit('addTasks', tasks)
		},
		addTasksToLocalStorage({ state }) {
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		fetchAllTasks({ commit }) {
			const tasks = JSON.parse(localStorage.getItem('tasks'))
			if (tasks) {
				commit("addTasks", tasks)
			}
		},
		changeStatus({ commit, dispatch }, { id, status }) {
			const tasks = JSON.parse(localStorage.getItem('tasks'))
			const task = tasks.find(task => task.id === id)
			task.status = status

			commit('addTasks', tasks)
			dispatch('addTasksToLocalStorage')
		}
	},
})

export default store