import { useContext } from 'react'
import AuthContext from '../contexts/JWTAuthContext'
//git checkout v2
//git merge testLogin
const useAuth = () => useContext(AuthContext)

export default useAuth