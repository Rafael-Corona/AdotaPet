import styles from './login.module.css'

function Login() {
	const handleSubmit = async (event) => {
		event.preventDefault()

		const data = {
			name: event.target.name.value,
			password: event.target.password.value,
		}

		event.target.name.value = ''
		event.target.password.value = ''

		const jsonData = JSON.stringify(data)

		const endpoint = '/api/login'

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: jsonData
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.login_form}>
					<div className={styles.text_box}>
						<label htmlFor="Nome">Nome</label>
						<input type="text" name="name" required />
					</div>

					<div className={styles.text_box}>
						<label htmlFor="last">Senha</label>
						<input type="password" name="password" />
					</div>

					<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default Login
