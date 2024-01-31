import { FlowbiteNavBar, Footer } from "@/components";
import DesktopSideBar from "@/components/sidebar/DesktopSideBar";
import SideBar from "@/components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";


export default async function UsersLayout ({
    children
}: {
    children:React.ReactNode;
}){
    const users = await getUsers();
    return(
        
          
        <SideBar>
            <div className="h-full ">
                
               
             <UserList items={users}/>
               
                {children}
               
            </div>
        </SideBar>
      
        
    )
}