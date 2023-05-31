import axios from "axios"
//localhost en puerto 5000
const api = "http://localhost:5000/"

const traerSitios = async () => {
    const res = await axios.get(api + "sitios")
    return res.data
}    

const login = async (email, password) => {
    const res = await axios.post(api + "login", {email, password})
    return res.data
}

const registrar = async (email, password, name) => {
    const res = await axios.post(api + "register", {email, password, name})
    return res.data
}