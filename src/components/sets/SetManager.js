export const getSets = () => {
    return fetch("http://localhost:8000/sets", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleSet = (id) => {
    return fetch(`http://localhost:8000/sets/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}