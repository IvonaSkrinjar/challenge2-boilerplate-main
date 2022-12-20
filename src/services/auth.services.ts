import BaseHttpService from "./base-http.service";

const apiClient =  BaseHttpService();
const getUser = async (id:number) => {
    return await apiClient.get(`users/${id}`);    
};

const login = async (username: string, password: string) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({username: username, password: password}),
    };
    return fetch("https://fakestoreapi.com/auth/login", requestOptions)
        .then(response => {
            if(response.status === 200){
                return response.json();
            }
            else {               
                return "";
            }
        } );
    /*await apiClient.post("auth/login",
        requestOptions)
        .then(data => console.log(data.json())) ;*/
    
    
};

export const authservices = {
    getUser,
    login   
};

export default authservices;



