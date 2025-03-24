import React from 'react'
import { apiSignup } from '../services/auth'

const AddBook = () => {
  //should be const SignUp = () => {} this is a signup form. I am just using the addbook form
// const handleSubmit = async (data) => {
//   const payload = {
//     firstName: data.firstname
//     lastName: data.lasttname 

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  try {
    const response = await apiSignup(payload);
    console.log(response);

    //const response = await apiSignup(formData);
    //console.log(response);
    
  } catch (error) {
    console.log(error);

    
  }

}

  return (
  

<div class="login-container flex">
        <div class="login-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in</p>
        </div>
        
        <form className='grid gap-y-6' onSubmit={handleSubmit}>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
              
            </div>
            
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required/>
            
            </div>
            
            <div class="remember-forgot">
                <div class="remember">
                    <input type="checkbox" id="remember"/>
                    <label for="remember">Remember me</label>
                </div>
                <a href="#" class="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" class="login-button">Sign In</button>
        </form>
        
        <div class="signup-link">
            Don't have an account? <a href="#">Sign up</a>
        </div>
        </div>
    
      
    
    
  )
}

export default AddBook