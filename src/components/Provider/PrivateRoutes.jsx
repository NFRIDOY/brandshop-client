import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export default function PrivateRoutes({children}) {
    const { currentUser, loading } = useContext(AuthContext)
    // const navigate = useNavigate();

    if (loading) {
        return <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
    }

    if (currentUser) {
        return children;
    }

    // return <Navigate to={'/login'}></Navigate>
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
}
