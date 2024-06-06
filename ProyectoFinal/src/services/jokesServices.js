import api from "./config"

const getAllJokes = async () => {
    try {
        const { data } = await api.get("jokes")
        return data.jokes
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllJokes
}