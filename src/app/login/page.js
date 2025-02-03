'use client'
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const handleNavigation = () =>{
        router.push('/dashboard')
    }
    return (
        <div>
            <h1>Hello form log in page</h1>
            <button onClick={handleNavigation}>Dashboard</button>
        </div>
    );
};

export default LoginPage;