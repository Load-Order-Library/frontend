import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import InputError from '@/components/InputError';
import useAuth from '../context/AuthProvider';
import { Auth, LoginErrors } from '@/types/AuthTypes';

export default function Login() {
	const { login } = useAuth() as Auth;

	const [name, setName] = useState<string>('');
	const [errors, setErrors] = useState<LoginErrors | null>(null);
	const [password, setPassword] = useState<string>('');

	const submitForm = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		login({
			name,
			password,
			setErrors,
		});
	};

	return (
		<div className="flex flex-col content-center items-center justify-center px-4 text-xl">
			<div className="justify-startp-5 flex flex-col items-center">
				<h1 className="text-5xl text-gray-600">Login</h1>
				<Form
					className="mt-5 flex flex-col space-y-4"
					method="post"
					onSubmit={submitForm}
				>
					<div>
						<label htmlFor="name" className="relative block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
							<input
								type="text"
								name="name"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="block w-full rounded-full border border-gray-900 bg-gray-600 px-4 py-3 pl-14 placeholder-gray-400"
								placeholder="Username..."
								required
							/>
						</label>
						{errors?.name && (
							<InputError
								message={errors.name[0]}
								className="mt-2"
							/>
						)}
					</div>

					<div>
						<label htmlFor="password" className="relative block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>

							<input
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full rounded-full border border-gray-900 bg-gray-600 px-4 py-3 pl-14 placeholder-gray-400"
								placeholder="Password..."
								required
							/>
						</label>

						{errors?.password && (
							<InputError
								message={errors.password[0]}
								className="mt-2"
							/>
						)}
					</div>

					<section className="flex items-center justify-between">
						<Link
							to="/register"
							className="text-sm text-gray-400 underline hover:text-gray-600"
						>
							Not Registered?
						</Link>
						<button
							type="submit"
							className="rounded px-2 py-1 hover:bg-blue-500"
						>
							Login
						</button>
					</section>
				</Form>
			</div>
		</div>
	);
}
