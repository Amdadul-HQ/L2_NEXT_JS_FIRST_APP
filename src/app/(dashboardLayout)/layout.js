
const DashboardLayout = ({children}) => {
    return (
        <main className="flex">
            <Sidebar/>
            {children}
        </main>
    );
};

export default DashboardLayout;