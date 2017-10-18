
import shell from 'shelljs'

export default function commit() {
	const message = "message"
	shell.exec(`git add -A && git commit -m ${message}`)
}