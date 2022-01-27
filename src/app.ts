import { Command } from 'commander'
import list from './commands/list'

const program = new Command()

program
  .command('list')
  .description('List all the TODO tasks')
  .action(list)

program.parse()
