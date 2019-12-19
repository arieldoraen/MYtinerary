import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/api/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      console.log(res);
      if(res.data.status){
        alert(res.data.message);
        return res.data.status
      }else{
        alert(res.data.message);
        return res.data.error
      }
    })
}
export const login = user => {
  return axios
    .post('http://localhost:5000/api/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data + 'asd');
      if (typeof response.data.token  === 'string'){
      localStorage.setItem('usertoken', response.data.token)
      return response.data
      } else {
        console.log("password incorrect");
        alert("usuario o contraseña incorrectos")
      }
    })
    .catch(err => {
      console.log(err)
    })
}
 
export const googlelogin = user => {
  return axios
    .post('http://localhost:5000/api/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data);
      if (typeof response.data === 'string'){
      localStorage.setItem('usertoken', response.data)
      window.location.reload();
      } else {
        console.log("password incorrect");
      }
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const profile = user => {
  return axios
    .get('http://localhost:5000/api/user', {
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}