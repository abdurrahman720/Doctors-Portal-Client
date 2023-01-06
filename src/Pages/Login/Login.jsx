import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Authentication/Context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { emailSignIn, googleSignIn, isLoading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputError, setInputError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const [loginUserEmail, setLoginUserEmail] = useState('');

  // const token = useToken(loginUserEmail);
  const from = location?.state?.from?.pathname || "/";
  // if (token) {
  //   console.log(token);
  //   navigate('/appointment');
  // }

  const handleLogin = (data) => {
    setInputError("");
    console.log(data);
    emailSignIn(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        console.log("data",data?.email);
        
        const emailUser = user?.email;
        console.log(emailUser)
        console.log("user", user?.email);
        // console.log(setLoginUserEmail(emailUser))
        
        fetch(`http://localhost:5001/jwt?email=${emailUser}`)
        .then((response) => response.json())
        .then(data => {
            if (data.accessToken) {
              localStorage.setItem('doctorsToken', data.accessToken);
              toast.success("Log in successfully!")
              navigate(from, { replace: true });
              console.log(data.accessToken);
                
            }
        });

      })
      .catch((err) => {
        isLoading(false);
        setInputError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .cacth((error) => {
        console.log(error);
        setInputError(error.message);
        isLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-2xl w-3/4 md:w-1/3 mx-auto my-16 py-16 rounded">
      <h2 className="text-4xl text-center">Login</h2>
      <form className="w-3/4 mx-auto" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w sx">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w sx">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            {...register("password", {
              required: "Passowrd is required",
              minLength: {
                value: 6,
                message: "Passowrd must be at least 6 characters",
              },
            })}
            placeholder="password"
          />
          <label className="label">
            <span className="label-text">Forgot password?</span>
          </label>
        </div>
        {errors.password && (
          <p className="text-red-600" role="alert">
            {errors.password?.message}
          </p>
        )}

        <input
          className="btn btn-accent w-full mt-5"
          type="submit"
          value="Login"
        />
      </form>
      {inputError && <p className="text-red-600 text-xs">{inputError}</p>}
      <p className="text-sm font-sarif ">
        New to Doctors Portal?{" "}
        <Link className="text-secondary" to="/register">
          Create a new account
        </Link>{" "}
      </p>
      <div className="divider mx-5">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-accent btn-outline"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
