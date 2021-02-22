import http from '../PythonAPI'



export const getPython=()=>{
    const url = 'api-token-auth/' 
    const data = {
        'username':'robin', 
        'password':'hemligt2020'
    }
    const header= {
        'Access-Control-Allow-Origin': 'https://pilgrim.pythonanywhere.com/', 
    }
    const response =  http.post(url, data)
    setTimeout(console.log('DATA', response), 5000)
    
    //const myToken = 'Token ' + returnData['token']
    /*const url = 'https://pilgrim.pythonanywhere.com/request-data/'
    http.headers = {'Authorization': myToken}
    const data2 = {'id':'all'} //)id or all
    const x = http.get(url, data2)*/
    
}

