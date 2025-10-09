const getStoredApp = () =>{
    const storedAppStr = localStorage.getItem("app")
    if(storedAppStr){
        const storedAppData= JSON.parse("app", storedAppStr)
        return storedAppData;
    }
    else{
        return []
    }
}

const addStoredApp = (id)=>{
    const addStoredAppData = getStoredApp();
    if(addStoredAppData.includes(id)){
        alert("book already read");
    }
    else{
        addStoredAppData.push(id);
        const appData = JSON.stringify(addStoredAppData);
        localStorage.setItem("app", appData)
    }
}
// const addStoredApp = (id) =>{
//     const addStoredAppData = getStoredApp();
//     if(addStoredAppData.includes(id)){
//         return alert("app already added");
//     }
  
//     else{
//         addStoredAppData.push(id);
//         const appData = JSON.stringify(addStoredAppData);
//         localStorage.setItem("app", appData)
//     }
// }

export {getStoredApp, addStoredApp};