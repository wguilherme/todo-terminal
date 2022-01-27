// import chalk from 'chalk'
import Conf from 'conf'
import api from '../services/api'
// const conf = new Conf()
// const todoList: any = conf.get('todo-list')

const taskActions = {
  async list() {
    try {
      const { data: tasks } = await api.get('/task')
      if (tasks.length > 0) {
        tasks.map((task: any) => console.log(`${task.name}, ${task.description || 'sem descrição'} - Projeto: ${task.project}`))
      } else console.log('Nenhuma tarefa disponível')
    } catch (error) { console.log('Ocorreu um erro', error?.message) }
  },
  async create(name) {
    try {
      console.log(name)
    } catch (error) { console.log('Ocorreu um erro', error?.message) }
  },
}

export default taskActions
