import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthProvider'
import googleLogo from '../assets/Google-Symbol.png'
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const {login ,loginWithGoogle } = useContext(AuthContext);
	const [error,setError] = useState("")

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/"
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		
		login(email, password)
		  .then((userCredential) => {
			// signed in
			const user = userCredential.user;
			toast.success("Login successful!",{
				onClose: ()=>{
			// Check if the user is an admin or not
			// Assuming you have a property 'isAdmin' in your user object to determine admin status
			if (user.email === 'admin@gmail.com' && password === 'admin123') {
			  // Redirect to admin dashboard if the user is an admin
			  navigate('/admin/dashboard');
			} else {
			  // Redirect to regular user dashboard or homepage
			  navigate('/home');
			}
		  }
	    });
	 })
		  
		  .catch((error) => {
			const errorMessage = error.message;
			setError(errorMessage);
		  });
	  };

	// sign up using google accounts
	const handleRegister = () =>{
		loginWithGoogle().then((result)=>{
			const user = result.user
			alert("Sign up successfully!")
			navigate(from,{replace:true})
		}).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setError(errorMessage)
			// ..
		  });
	}

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{backgroundImage:"url(https://www.hdwallpapers.in/download/luigi_mario_luigi_playing_video_games_with_gray_background_hd_games-1920x1080.jpg)",backgroundSize:"cover" , backgroundPosition:"right"}}>
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<form onSubmit={handleLogin} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
						<div class="relative">
							<input id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address" />
						</div>
						<div class="relative">
							<input id="password" name="password" type="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" />
						</div>
						{error ? <p className='text-red-600 text-base'>Email or Password is not correct</p> : ""}
						<div>
							<p>If you have an account. Please <Link to="/" style={{color:"blue"}}>Sign-up</Link> Here</p>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
						</div>
					</form>
					
					<div className='flex w-full items-center flex-col mt-5 gap-3'>
						<button className='block' onClick={handleRegister}>
							<img src={googleLogo} alt='' className='w-12 h-12 inline-block'/>Login with Google
					    </button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover theme='dark' limit={1} transition={Slide}/>
</div>
  )
}

export default Login