import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import lotty from '../assets/register.json'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Google from "../Components/Google";


const Register = () => {

  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handelRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photo = e.target.photo.value

    console.log(email, password, name, photo)

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        navigate('/');
      })
      .catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className=" hero-content gap-10 flex-col lg:flex-row-reverse">
    <div className=" mx-auto max-w-2xl text-center flex-1 lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <Lottie animationData={lotty}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm flex-1 shrink-0 shadow-2xl">
      <form onSubmit={handelRegister} className="card-body mx-auto">
          <h2 className='text-2xl font-bold text-center'>Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
              // type={showPassword ? "text" : "password"}
            type="password"  
            name="password"
            placeholder="password"
            className="input input-bordered" required />
          {/* <button type='button' onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-12">
            {
              showPassword? <FaEyeSlash /> : <FaEye />
            }
            </button> */}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Register</button>
        </div>
          </form>
          <Google></Google>
    </div>
  </div>
</div>
  );
};

export default Register;