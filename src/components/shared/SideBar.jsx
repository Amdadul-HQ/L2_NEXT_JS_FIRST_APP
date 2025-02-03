import Link from 'next/link';

const SideBar = () => {
    return (
        <div className='h-screen w-64 bg-gray-800 text-white '>
            <h1 className='text-2xl font-bold mb-6'>My SideBar</h1>
            <nav className='space-y-4'>
                <Link className='block px-4 py-2 rounded hover:bg-gray-500' href='/'>
                    Home
                </Link>
                <Link className='block px-4 py-2 rounded hover:bg-gray-500' href='/profile'>
                Profile
                </Link>
                <Link className='block px-4 py-2 rounded hover:bg-gray-500' href='/settings'>
                Settings
                </Link>
            </nav>
        </div>
    );
};

export default SideBar;