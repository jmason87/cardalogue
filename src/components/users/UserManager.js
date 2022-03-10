export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/users/current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}