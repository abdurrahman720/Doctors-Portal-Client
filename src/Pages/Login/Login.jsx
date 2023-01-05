import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
    
    const handleLogin = (data) => {
      console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center shadow-2xl w-3/4 md:w-1/3 mx-auto my-16 py-16 rounded">
      <h2 className="text-4xl text-center">Login</h2>
      <form
        className="w-3/4 mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="form-control w-full max-w sx">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            {...register("email")}
            placeholder="Email"
          />
        </div>
        <div className="form-control w-full max-w sx">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            {...register("password")}
            placeholder="password"
          />
          <label className="label">
            <span className="label-text">Forgot password?</span>
          </label>
        </div>

        <input className="btn btn-accent w-full mt-5" type="submit" value="Login" />
          </form>
          <p className="text-sm font-sarif ">New to Doctors Portal? <Link className="text-secondary" to="/register">Create a new account</Link> </p>
          <div className="divider mx-5">OR</div>
          <button className="btn btn-accent btn-outline">Continue with Google</button>
    </div>
  );
};

export default Login;
