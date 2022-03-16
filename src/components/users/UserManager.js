export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/users/current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getUsers = () => {
    return fetch(`http://localhost:8000/users`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getUser = (id) => {
    return fetch(`http://localhost:8000/users/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const makeAdmin = (id) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    return fetch(`http://localhost:8000/users/${id}/admin`, fetchOptions)
}

export const makeCollector = (id) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    return fetch(`http://localhost:8000/users/${id}/collector`, fetchOptions)
}