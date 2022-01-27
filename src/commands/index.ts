// import chalk from 'chalk'
import Conf from 'conf'
import api from '../services/api'
// const conf = new Conf()
// const todoList: any = conf.get('todo-list')

const taskActions = {
  async list() {
    try {
      const { data: tasks } = await api.get('/task')
      // console.log(tasks)
      if (tasks?.length > 0) {
        tasks.map((task: any) => console.log(`${task.name}, ${task.description || 'sem descrição'} - Projeto: ${task.project || 'sem projeto'}`))
      } else console.log('Nenhuma tarefa disponível')
    } catch (error) { console.log('Ocorreu um erro', error?.message) }
  },
  async create(name, description, project) {
    try {
      const post = await api.post('/task', { name, description, project })
      console.log(`Tarefa adicionada com ID ${post?.data?._id}`)
    } catch (error) { console.log('Ocorreu um erro', error?.message) }
  },
}

export default taskActions
