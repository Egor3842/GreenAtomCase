import * as axios from 'axios';

export const MainAPI = {
    login(email,password){
       let body= {
            email:email,
            password: password
          }

          console.log(body)
        return axios.post(`http://localhost:9000/api/login`, body)
        .then(response=>{return response.data})
    },
    takeData(user_id){ 
      console.log(user_id)
       return axios.post(`http://localhost:9000/api/get_plans_super`, user_id)
       .then(response=>{return response.data})
   }
    
}