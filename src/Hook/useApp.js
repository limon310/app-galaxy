import axios from "axios";
import { useEffect, useState } from "react"

const useApps = ()=>{
    const [apps, setApps] = useState([])
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    useEffect(()=>{
        axios("/data.json")
        .then(data=>setApps(data.data))
        .finally(() => setLoadingSpinner(false))
    },[])
    return {apps, loadingSpinner};
}
export default useApps;