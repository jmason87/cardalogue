export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getTag = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}