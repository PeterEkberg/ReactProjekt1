import Axios from 'axios'

const URL = 'https://pilgrim.pythonanywhere.com/'
const PythonAPI= Axios.create({
    baseURL: URL
})

export default PythonAPI