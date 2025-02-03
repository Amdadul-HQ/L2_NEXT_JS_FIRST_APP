import SideBar from "../../components/shared/SideBar.jsx";

const DashboardLayout = ({children}) => {
    return (
        <main className="flex">
            <SideBar/>
            {children}
        </main>
    );
};

export default DashboardLayout;