
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import yargs from 'yargs'

import commit from './commit.js'
import push from './push.js'

const argv = yargs.usage("$0 command")

  .command("commit", "commit changes to the repo", commit)
  .command("c", false, commit)

  .command("push", "push changes up to GitHub", push)
  .command("p", false, push)
  .argv

