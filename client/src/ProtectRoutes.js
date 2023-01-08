import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({user, children}){
    return(
        user 
        ? <Outlet />
        : <Navigate to='/home' replace/>
    )
}

export default ProtectedRoute;