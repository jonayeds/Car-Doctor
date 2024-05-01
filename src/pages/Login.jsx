import { useContext } from 'react';
import login from '../assets/images/login/login.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
  const {logIn} = useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        logIn(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(err=>{
          console.log(err.message)
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=" w-1/3">
     <img src={login} alt="" className='' />
    </div>
    <div className="card   lg:p-12 border w-2/3 ">
      <form onSubmit={handleLogin} className="card-body lg:w-2/3 mx-auto">
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-base-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered bg-base-200" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary border-none hover:bg-black  bg-red-500 text-white">Login</button>
        </div>
      </form>
          <div className="text-center">
            <p>Or sign in with</p>
            <div className='flex justify-center gap-3 mt-4 text-2xl items-center'>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500 '><FaFacebookF /></button>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500'><FaLinkedinIn /></button>
              <button className='bg-gray-200 hover:text-red-500 p-3 rounded-full'><FaGoogle /></button>
            </div>
            <p className='mt-4'>Don`t have an account? <Link to={'/signUp'} className='text-red-500 font-semibold'>Sign Up</Link></p>
          </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;