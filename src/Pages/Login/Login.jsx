import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TitleArea from "../../component/Shared/TitleArea";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
    const {logInWithGoogle, logInUserWithEmail} = useContext(AuthContext);
    const [notification , setNotification] = useState(''); 
    const [error , setError] = useState(''); 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; 

    console.log(from);
	const onSubmit = (data) => {
		const email = data.email;
		const password = data.password;
		logInUserWithEmail(email , password)
        .then((result) => {
            // Signed in 
            const user = result.user;
			toast.success("User Log In Successfully");
            setError('')
            reset();
            console.log(user);

            navigate(from, { replace: true });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error)
            // ..
          });
		
	};
    const handleGoogleSubmission = () => {
        logInWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            setError(errorMessage)
          });

    }


    return (
		<section className="login-area mb-12">
            <TitleArea>{"Log In"}</TitleArea>
            <div className="container mx-auto">
            <div className="flex">
			<div className="w-6/12 max-w-md p-4 rounded-2xl shadow sm:p-8 mx-auto bg-blue-50">
				<h2 className="mb-3 text-3xl font-semibold text-center">
					Log into your account
				</h2>
				<p className="text-sm text-center">
                    
					Don't have have account?
					<Link to={'/register'}>
                    <span className="focus:underline hover:underline"
                     >Create here</span>
					</Link>
					
				</p>
				<div className="my-6 space-y-4">
					<button
						aria-label="Login with Google"
						type="button"
						className="flex items-center justify-center w-full p-4 space-x-4 border rounded-xl focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                    onClick={handleGoogleSubmission}
                    >
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current"
						>
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
						<p>Login with Google</p>
					</button>
				</div>
				<div className="flex items-center w-full my-4">
					<hr className="w-full  " />
					<p className="px-3  ">OR</p>
					<hr className="w-full  " />
				</div>
				<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col mx-auto space-y-6 px-6"
						>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="w-full">
									Email
								</label>
								<input
									placeholder="bluebill1049@hotmail.com"
									type="email"
									{...register("email")}
									className="input input-bordered w-full "
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="password" className="w-full">
									Password
								</label>
								<input
									placeholder="****"
									type="password"
									{...register("password")}
									className="input input-bordered w-full "
								/>
							</div>

							<input type="submit" value={"Log In"} className="btn btn-accent py-4" />
						</form>
			</div>
            </div>
            </div>
            
		</section>
	);
};

export default Login;