import React ,{ useState , useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        console.log('Hello');
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    


    return (
        <AppContext.Provider value={{
            isModalOpen ,
            isSidebarOpen , 
            openSidebar ,
            closeSidebar ,
            openModal ,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext , AppProvider}