export const getCollections = () => {
    return fetch("http://localhost:8000/collections", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}