import { Command } from 'commander'
import task from './commands'

const program = new Command()

program
  .command('list')
  .description('List all the TODO tasks')
  .action(task.list)

program
  .command('add <name> <description> <project>')
  .description('Create a task')
  .action((name, description, project) => task.create(name, description, project))

program.parse()
