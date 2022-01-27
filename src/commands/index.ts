// import chalk from 'chalk'
import Conf from 'conf'

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

  list() {
    if (todoList && todoList.length) {
      console.log(`Você tem ${todoList.length} tarefas:`)

      todoList.map((item: any) => console.log(`${item.name} - Projeto: ${item.project}`))
    } else {
      // user does not have tasks in todoList
      console.log('Nenhuma tarefa em aberto')
    }
  },
}

export default taskActions
