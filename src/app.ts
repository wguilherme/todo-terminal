import { Command } from 'commander'
import task from './commands'

const program = new Command()

program
  .command('list')
  .description('List all the TODO tasks')
  .action(task.list)

program
  .command('add <name>')
  .description('Create a task')
  .action((name) => task.create(name))

program.parse()
