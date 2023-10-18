import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export default function PrivateRoutes({children}) {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
}
