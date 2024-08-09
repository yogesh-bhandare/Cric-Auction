import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function BaseForm({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [isAdminLogin, setIsAdminLogin] = useState(true);
    const navigate = useNavigate();
    const name = method === "login" ? "Login" : "Register";

    const handleToggle = () => {
        setIsAdminLogin(!isAdminLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                setMessage("Login successful! Redirecting...");
                navigate("/auction/lists");
            } else {
                setMessage("Registration successful! Redirecting to login...");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again."); 
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-2/3 w-full hidden md:block bg-white">
                <img
                    className="w-full h-full object-fit"
                    src="/src/assets/Logo.png"
                    alt="Login"
                />
            </div>
            <div className="md:w-1/3 w-full flex flex-col justify-center items-start p-8 bg-[#262626] text-white">
                <h2 className="text-4xl font-bold mb-8 text-[#F23D4C]">{name}</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    {message && <div className="mb-4 text-center text-lg text-[#BFF207]">{message}</div>}
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-[#BFF207] rounded bg-[#262626] text-white text-lg focus:outline-none focus:border-[#F23D4C]"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-[#BFF207] rounded bg-[#262626] text-white text-lg focus:outline-none focus:border-[#F23D4C]"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        className="w-full py-2 px-4 bg-[#F23D4C] text-white text-lg font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
                        type="submit"
                    >
                        {name}
                    </button>
                    <div className="text-[#BFF207] underline text-center text-lg mt-2">
                        {method === "login" ? (
                            <a href="register">Don't have an account? Register</a>
                        ) : (
                            <a href="login">Already have an account? Login</a>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BaseForm;
