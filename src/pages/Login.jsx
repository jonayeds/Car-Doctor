import login from '../assets/images/login/login.svg'
const Login = () => {
    const handleLogin =(e)=>{
        e.preventDefault()
        
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
          </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;