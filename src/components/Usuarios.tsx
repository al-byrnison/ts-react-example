import { User } from '../interfaces/reqRes.interface'
import { useUsers } from '../hooks/useUsers'

export const Usuarios = () => {
	const { usuarios, nextPage, prevPage, pageRef } = useUsers()

	const renderUser = ({ id, first_name, last_name, avatar, email }: User) => {
		return (
			<tr key={id.toString()}>
				<td>
					<img
						src={avatar}
						alt={first_name}
						className='rounded-circle border border-info border-4'
                        width={50}
                        height={50}
					/>
				</td>
				<td>
					{first_name} {last_name}
				</td>
				<td>{email}</td>
			</tr>
		)
	}

	return (
		<>
			<h3>Usuarios</h3>
			<table className='table'>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>Mail</th>
					</tr>
				</thead>
				<tbody>{usuarios.map(renderUser)}</tbody>
			</table>
			<div className='d-flex justify-content-between'>
				<button
					className='btn btn-info'
					onClick={prevPage}
				>
					Anteriores
				</button>
                <span>{pageRef.current}</span>
				<button
					className='btn btn-info'
					onClick={nextPage}
				>
					Siguientes
				</button>
			</div>
		</>
	)
}
