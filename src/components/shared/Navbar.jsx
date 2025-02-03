
const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    MySite
                </a>
            </div>
            <div className="space-x-6">
                <a href="/about" className="hover:text-gray-200">
                    About us
                </a>
                <a href="/contact" className="hover:text-gray-200">
                    Contact us
                </a>
                <a href="/login" className="hover:text-gray-200">
                    Login
                </a>
                <a href="/register" className="hover:text-gray-200">
                    Register
                </a>
            </div>
        </nav>
    );
};

export default Navbar;