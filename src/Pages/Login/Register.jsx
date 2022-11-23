import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TitleArea from "../../component/Shared/TitleArea";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const imageHostKey = import.meta.env.VITE_IMGBB_KEY;
	const {
		logInWithGoogle,
		createUserWithEmail,
		verifyEmail,
		userProfileUpdate,
	} = useContext(AuthContext);
	const [notification, setNotification] = useState("");
	const [error, setError] = useState("");

	const onSubmit = (data) => {
		const name = data.fullName;
		const email = data.email;
		const password = data.password;
		const image = data.profileImg[0];

		const formData = new FormData();
		formData.append("image", image);
		const hostUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

		console.log(image, hostUrl, data);
		fetch(hostUrl, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					const photoUrl = imgData.data.url;
					// save data to firebase
					createUserWithEmail(email, password)
						.then((result) => {
							toast.success("User Successfully Created");
							// Signed Up
							const user = result.user;
							console.log(user);
							handleUserProfileUpdate(name, photoUrl);
							// ...
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							setError(error);
							// ..
						});
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleVerification = (email) => {
		verifyEmail(email)
			.then(() => {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				const message =
					"Please Check your Email Inbox or Spam for Verification Code.";
				setNotification(message);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error);
				// ...
			});
	};

	const handleUserProfileUpdate = (name, photoURL) => {
		userProfileUpdate(name, photoURL)
			.then(() => {
				// Profile updated!
				toast.success("User Profile Created");
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
				toast.error(error);
				setError(error);
			});
	};

	const handleGoogleSubmission = () => {
		logInWithGoogle()
			.then((result) => {
				const user = result.user;
				toast.success("User Successfully Created");
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				setError(errorMessage);
			});
	};

	return (
		<section className="register-area mb-12">
			 <TitleArea>{"Register"}</TitleArea>
			<div className="container mx-auto">
				<div className="flex">
					<div className="w-6/12 max-w-md p-4 rounded-2xl shadow-2xl sm:p-8 mx-auto bg-violet-50">
						<h2 className="mb-3 text-3xl font-semibold text-center">
							Register your account
						</h2>
						<p className="text-sm text-center">
							Already have account?
							<Link to={"/login"}>
								<span className="focus:underline hover:underline">
									Login here
								</span>
							</Link>
						</p>
						<div className="my-6 space-y-4">
							<button
								aria-label="Login with Google"
								type="button"
								className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
								onClick={handleGoogleSubmission}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									className="w-5 h-5 fill-current"
								>
									<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
								</svg>
								<p>Register with Google</p>
							</button>
						</div>
						<div className="flex items-center w-full my-4">
							<hr className="w-full" />
							<p className="px-3  ">OR</p>
							<hr className="w-full" />
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col mx-auto space-y-6 px-6"
						>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="fullName" className="w-full">
									Full Name
								</label>
								<input
									placeholder="bill"
									{...register("fullName")}
									className="input input-bordered w-full"
								/>
							</div>
							<div className="col-span-full sm:col-span-3 ">
								<label htmlFor="profileImg" className="w-full">
									Profile Image
								</label>

								<input
									{...register("profileImg", {
										required: "profile image is Required",
									})}
									type="file"
									className="file-input file-input-bordered w-full max-w-xs"
								/>
								{/* {errors.profileImg && (
										<span className="text-error">Image is Required</span>
									)} */}
							</div>
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

							<input type="submit" value={"Register"} className="btn btn-accent py-4" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
