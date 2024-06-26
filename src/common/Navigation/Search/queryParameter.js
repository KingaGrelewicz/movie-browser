import { useLocation } from "react-router-dom";

export const useQueryParameter = key => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const value = searchParams.get(key);
    
    return value;
}