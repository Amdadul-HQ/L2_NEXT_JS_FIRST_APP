import Navbar from "../../components/shared/Navbar.jsx";

const CommonLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default CommonLayout;