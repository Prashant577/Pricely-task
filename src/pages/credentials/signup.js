import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(){
    super()
    this.state = {
        fullName:'',
        username:'',
        email:'',
        password:''
    }

    //this.changeFullName is used to enter values in the the input labels

    this.changeFullName = this.changeFullName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

    //THESE ALL ARE ONCHANGE EVENT WHICH ARE EVOKED OR CALLED WHEN WE ENTER FULLNAME/USERNAME/PASSWORD AND THE SETSTATE FUNCTION STORES THE CHANGES VALUES

  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:3500/app/signup',registered)
    .then(response => console.log(response.data))

    this.setState({
      fullName:'',
      username:'',
      email:'',
      password:''
    })
  }


  render() {
    return (
      <div className={' min-h-screen flex justify-center items-center bg-gray-800'}>
          <div className={' bg-gray-300 p-16 rounded shadow-2xl w-2/3'}>
          <h2 className={' text-3xl font-bold mb-5 text-gray-700 justify-center flex items-center'}>CREATE A NEW PRICELY ACCOUNT</h2>
          <form className={' space-y-5'} onSubmit={this.onSubmit}>
          <div className={' mr-2'}>
          <label className={'font-bold'}>Enter Full Name: </label>
            <input type={'text'} placeholder={'Full Name'}
             onChange={this.changeFullName} value={this.state.fullName}
             className={' border-2 border-gray-500 outline-none focus:border-blue-800 rounded'} ></input>
             </div>

             <div className={' mr-2'}>
             <label className={'font-bold'}>Enter Username: </label>
             <input type={'text'} placeholder={'Username'} 
             onChange={this.changeUsername} value={this.state.username}
             className={' border-2 border-gray-500 outline-none focus:border-blue-800 rounded'}></input>
             </div>

             <div className={' mr-2'}>
             <label className={'font-bold'}>Enter EMAIL-ID: </label>
             <input type={'text'} placeholder={'E-mail'} 
             onChange={this.changeEmail} value={this.state.email}
             className={' border-2 border-gray-500 outline-none focus:border-blue-800 rounded'}></input>
             </div>

             <div className={' mr-2'}>
             <label className={'font-bold'}>Enter Password: </label>
             <input type={'password'} placeholder={'Password'} 
             onChange={this.changePassword} value={this.state.password}
             className={' border-2 border-gray-500 outline-none focus:border-blue-800 rounded'}></input>
             </div>

             <div className={' mr-2 flex items-center'}>
             <input type={'checkbox'} id={'agree'}></input>
             <label for={'agree'} className={' ml-2 text-sm text-gray-700'}>I agree to the terms and condition</label>
             </div>

             <input type={'submit'} value={'Submit'} className={'block w-full p-4 rounded bg-blue-800 text-black hover:bg-green-900 transition duration-300'}></input>
             </form>
             </div>
             </div>
    )
  }
}

export default Signup