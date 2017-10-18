
import shell from 'shelljs'

export default function push() {
	shell.exec(`git push origin master --force`)
}