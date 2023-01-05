
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/Context/AuthProvider';

const SignUp = () => {
    const {emailSignUp, googleSignIn , isLoading, getProfileData}  = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputError, setInputError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleRegister = (data) => {
        console.log(data);
        emailSignUp(data.email, data.password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user)
                getProfileData(data.name);
                toast.success("Registration Successfull!");
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.log(err.message);
                setInputError(err.message)
                isLoading (false)
            })
           
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .cacth(error => {
                console.log(error)
                setInputError(error.message);
                isLoading(false)
        })
    }


    return (
        <div className="flex flex-col justify-center items-center shadow-2xl w-3/4 md:w-1/3 mx-auto my-16 py-16 rounded">
        <h2 className="text-4xl text-center">Register</h2>
        <form
          className="w-3/4 mx-auto"
        onSubmit={handleSubmit(handleRegister)}
        >
          <div className="form-control w-full max-w sx">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
                {...register("name",{required: "Name is required"})}
              placeholder="Full Name"
                    />
                     {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w sx">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
                        {...register("email",{required: "Email is required"})}
                        
              placeholder="Email"
                    />
                    {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>} 
          </div>
          <div className="form-control w-full max-w sx">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
                        {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" },
                            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"}
                        })} 
              placeholder="password"
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                </div>
               
  
          <input className="btn btn-accent w-full mt-5" type="submit" value="Sign Up" />
            </form>
            {inputError && <p className="text-red-600 text-xs">{inputError }</p>}
            <p className="text-sm font-sarif ">Already have an account? <Link className="text-secondary" to="/login">Log In</Link> </p>
            <div className="divider mx-5">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-accent btn-outline">Continue with Google</button>
      </div>
    );
};

export default SignUp;