import { useState } from 'react';
import { login } from '../services/authServices';

const LoginPage = ({ setAuthToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await login({ email, password });
            localStorage.setItem('token', token); // Save token in localStorage
            setAuthToken(token); // Update auth state
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-ce">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;