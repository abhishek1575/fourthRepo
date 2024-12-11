import { Component } from "react"; 
import config from "./Config";
import axios from "axios";


const URL = config.server_url+"auth/"
class AuthService extends Component{
    login(email, password){
        console.log("url"+URL);
        return axios
            .post(URL+ "login",{
                email, password
            }).then((response)=>{
                if(response.data.jwt){
                    sessionStorage.setItem("UserId", response.data.id);
                    sessionStorage.setItem("Email",response.data.email);
                    sessionStorage.setItem("Name", response.data.name);
                    sessionStorage.setItem("Type", response.data.type);
                    sessionStorage.setItem("Token",response.data.token);
                    sessionStorage.setItem("Role",response.data.role);
                    sessionStorage.setItem("isLoggedIn",true);

                    console.log(sessionStorage.getItem("UserId"));
                    console.log(sessionStorage.getItem("Email"));
                    console.log(sessionStorage.getItem("Name"));
                    console.log(sessionStorage.getItem("Token"));
                    console.log(sessionStorage.getItem("Role"));
                }
                return response;
            });
    };

    logout(){
        sessionStorage.removeItem("UserId");
        sessionStorage.removeItem("Email");
        sessionStorage.removeItem("Name");
        sessionStorage.removeItem("Type");
        sessionStorage.removeItem("Token");
        sessionStorage.removeItem("Role");
        sessionStorage.removeItem("isLoggedIn");
        return Promise.resolve();
    };
}