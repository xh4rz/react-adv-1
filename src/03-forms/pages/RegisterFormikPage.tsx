import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(3, 'El nombre debe de ser mínimo de 3 caracteres o mas')
						.max(15, 'El nombre debe de ser máximo de 15 caracteres')
						.required('Requerido'),
					email: Yup.string()
						.email('Revise el formato del correo')
						.required('Requerido'),
					password1: Yup.string()
						.min(6, 'Mínimo 6 letras')
						.required('Requerido'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
						.required('Requerido')
				})}
			>
				{({ handleReset }) => (
					<Form noValidate autoComplete="off">
						<MyTextInput label="Name" name="name" placeholder="Harold" />
						<MyTextInput
							label="Email"
							type="email"
							name="email"
							placeholder="harold@gmail.com"
						/>
						<MyTextInput
							label="Password"
							type="password"
							name="password1"
							placeholder="******"
						/>
						<MyTextInput
							label="Confirm Password"
							type="password"
							name="password2"
							placeholder="******"
						/>
						<button type="submit">Create</button>
						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
