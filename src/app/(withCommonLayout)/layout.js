import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({chindren}) => {
    return (
        <div>
            <Navbar/>
            {chindren}
        </div>
    );
};

export default CommonLayout;