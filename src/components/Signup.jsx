import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import googleLogo from '../assets/Google-Symbol.png'
import loginLogo from '../assets/logo.png'
function Signup() {
	const {createUser ,loginWithGoogle , loginWithFacebook} = useContext(AuthContext);
	const [error,setError] = useState("error")

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/"
	const  handleSignUp = (event)=>{
		event.preventDefault()
		const form = event.target
		// const uname = form.uname.value
		const email = form.email.value
		const password = form.password.value

		createUser(email, password).then((userCredential) => {
			// Signed up 
			const user = userCredential.user;
			toast.success("Sign up successfully!",{
				onClose: ()=>{
					navigate('/login')
				}
			})
			// ...
		  })
		  .catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setError(errorMessage)
			// ..
		  });
	}

	// sign up using google accounts
	const handleRegister = () =>{
		loginWithGoogle().then((result)=>{
			const user = result.user
			toast.success("Sign up successfully!")
			navigate(from,{replace:true})
		}).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setError(errorMessage)
			// ..
		  });
	}

	// sign up using fb accounts
	// const handleReg = () =>{
	// 	loginWithFacebook().then((result)=>{
	// 		const user = result.user
	// 		alert("Sign up successfully!")
	// 		navigate(from,{replace:true})
	// 	}).catch((error) => {
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		setError(errorMessage)
	// 		// ..
	// 	  });
	// }


	//to hold the value from input box
	const [userData, setUserData] = useState({
	//   username: "",
	  email: "",
	  password: ""
	})
  
	// const navigate = useNavigate()
	// console.log(userData);



	// const handleRegister = async (e) => {
	// 	e.preventDefault()
	
	// 	const { username, email, password } = userData
	// 	if (!username || !email || !password) {
	// 	  alert("Please Fill Form Completely")
	// 	}
	// 	else {
	// 	  const result = await registerAPI(userData)
	// 	  console.log(result);
	// 	  if (result.status === 200) {
	// 		alert(`${username} is successfully registered`)
	// 		setUserData({
	// 		  username: "",
	// 		  email: "",
	// 		  password: ""
	// 		})
	// 		// console.log(setUserData);
	// 		//navigate to login page
	// 		navigate('/login')
	// 	  }
	// 	  else {
	// 		alert(`${result.response.data}`)
	// 	  }
	
	// 	}
	
	
	
	//   }
  return (
    

	<section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: "url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg)"}}>
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                <button>
                	<span>
	                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
	                </span>
                </button>
                <button>
                	<span>
	                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
	                </span>
                </button>
                <button>
                	<span>
	                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
	                </span>
                </button>
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{backgroundColor: "#161616"}}>
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage: "url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg)"}}>
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
				<div class='items-center justify-center'>
					{/* <img src={loginLogo} width="60px" height="60px"/> */}
	                <h1 class="my-6 w-auto h-7 sm:h-8 inline-flex " style={{fontSize:"2rem"}}>
						Cosmic Game Store
	                    
	                </h1>
				</div>
                <div class="py-6 space-x-2">
                    <button ><span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span></button>
                    <button  onClick={handleRegister}><span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span></button>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
                </div>
                <p class="text-gray-100">
                    or use email your account
                </p>
                <form onSubmit={handleSignUp}  action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
				    {/* <div class="pb-2 pt-4">
                        <input type="text" name="uname" id="uname" placeholder="Username" class="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div> */}
                    <div class="pb-2 pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" class="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div class="pb-2 pt-4">
                        <input class="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    {/* <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="#">Forgot your password?</a>
                    </div> */}
					<div>
					   <p>If you have an account. Please <Link to="/login" style={{color:"blue"}}>Login</Link> Here</p>
					</div>
                    <div class="px-4 pb-2 pt-4">
                        <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
		<ToastContainer position='top-center' theme='colored' autoClose={2000}  />
    </section>
  )
}

export default Signup