// import chalk from 'chalk'
import Conf from 'conf'
import api from '../services/api'

const conf = new Conf()

const mockList = [
  {
    name: 'test1',
    done: false,
    project: 'project 1',
  },
  {
    name: 'test2',
    done: false,
    project: 'project 3',
  },
  {
    name: 'test3',
    done: false,
    project: 'project 3',
  },
]

// const todoList: any = conf.get('todo-list')
const todoList: any = mockList

const taskActions = {

  async list() {
    try {
      const { data: tasks } = await api.get('/task')
      if (tasks.length > 0) {
        tasks.map((task: any) => console.log(`${task.name}, ${task.description || 'sem descrição'} - Projeto: ${task.project}`))
      }
    } catch (error) { console.log('Ocorreu um erro', error?.message) }
  },
}

export default taskActions
