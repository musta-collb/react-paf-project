const SideBar = () => {
    return ( 
        <div className="flex flex-col flex-none w-1/6 bg-blue-600 drop-shadow-lg items-start justify-start">
            <div className="flex w-full items-center h-16 hover:bg-blue-700 pl-2">
                LINK ONE
            </div>
            <div className="flex  h-16 w-full items-center hover:bg-blue-700 pl-2">
                LINK TWO
            </div>
            <div className="flex  h-16 w-full items-center hover:bg-blue-700 pl-2">
                LINK TREE
            </div>
            <div className="flex h-16 w-full items-center hover:bg-blue-700 pl-2">
                LINK FOUR
            </div>
        </div>
     );
}
 
export default SideBar;