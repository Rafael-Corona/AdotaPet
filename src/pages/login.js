import HomeHeader from '../components/home_header';
import { useRouter } from 'next/router'

import styles from './login.module.css'

function Login() {
	const router = useRouter()

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

		console.log(result)

		router.push(result.userName + '/info')
	}

	return (
		<div>
			<HomeHeader />
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
		</div>
	)
}

export default Login
