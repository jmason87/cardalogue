export const getCurrentUser = () => {
    return fetch(`https://cardalogue-server.herokuapp.com/users/current`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getUsers = () => {
    return fetch(`https://cardalogue-server.herokuapp.com/users`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const getUser = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/users/${id}`, {
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
    return fetch(`https://cardalogue-server.herokuapp.com/users/${id}/admin`, fetchOptions)
}

export const makeCollector = (id) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    return fetch(`https://cardalogue-server.herokuapp.com/users/${id}/collector`, fetchOptions)
}