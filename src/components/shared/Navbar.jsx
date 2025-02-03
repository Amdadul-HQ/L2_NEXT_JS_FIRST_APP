import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    MySite
                </Link>
            <div className="space-x-6 flex items-center gap-x-4">
                <Link href="/about" className="hover:text-gray-200">
                    About us
                </Link>
                <Link href="/contact" className="hover:text-gray-200">
                    Contact us
                </Link>
                <Link href="/login" className="hover:text-gray-200">
                    Login
                </Link>
                <Link href="/register" className="hover:text-gray-200">
                    Register
                </Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;