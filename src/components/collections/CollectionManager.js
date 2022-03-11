export const getCollections = () => {
    return fetch("http://localhost:8000/collections", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCollection = (id) => {
    return fetch(`http://localhost:8000/collections/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createCollection = (newCollection) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCollection)
    }
    return fetch(`http://localhost:8000/collections`, fetchOptions)
        .then(getCollections)

}