import { useForm } from '../hooks/useForm'

export const Forms = () => {
	const {form, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: 'abc123'
    })

	return (
		<>
			<h3>Formularios</h3>
			<input
				type='text'
				className='form-control mb-2 mt-2'
				placeholder='Email'
				value={email}
                onChange={({target}) => onChange( target.value, 'email')}
			/>
			<input
				type='text'
				className='form-control mb-2 mt-2'
				placeholder='Password'
				value={password}
                onChange={({target}) => onChange( target.value, 'password')}
			/>

            <code>
                <pre>{JSON.stringify(form, null, 2)}</pre>
            </code>
		</>
	)
}
