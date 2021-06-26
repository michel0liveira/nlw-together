import { useContext } from "react";
import { AuthContext } from "../contexts/Authcontext";

export function useAuth() {
    const value = useContext(AuthContext)

    return value;
}