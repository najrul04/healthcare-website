import { useContext } from "react"
import { Context } from "./AuthProvider";

const useAuth = () => {
    return useContext(Context);
}

export default useAuth;