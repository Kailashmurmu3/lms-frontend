import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Signup(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewIamge] = useState("");

    const [signupData, setSignupData] = useState({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    })

    function handleUserInput(e){
        const {name, value} = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(event){
        event.preventDefaul();
        // Getting the image
        const uploadedImage = event.target.files[0];

        if(uploadedImage){
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener('load', function(){
                // console.log(this.result);
                setPreviewIamge(this.result);
            })
        }
    }

    return(
        <>
            <HomeLayout>
                <div className="flex items-center justify-center h-[100vh]">
                    <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                        <h1 className="text-center text-2xl font-bold">
                            Registration Page
                        </h1>

                        <label htmlFor="image_upload" className="cursor-pointer">
                            {previewImage ? (
                                <img className="w-24 h-2/4 rounded-full m-auto"/>
                            ):(
                                <BsPersonCircle className="w-24 h-2/4 rounded-full m-auto"/>
                            )}
                        </label>
                        <input 
                            onChange={getImage}
                            className="hidden"
                            type="file"
                            name="image_uploads"
                            id="image_uploads"
                            accept=".jpg, .jpeg, .png, .svg"
                        />
                        <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="font-semibold">Name</label>
                            <input
                                type="text"
                                required
                                name="fullName"
                                id="fullName"
                                placeholder="Enter Your Name"
                                className="bg-transparent px-2 py-1 border"
                                onClick={handleUserInput}
                                value={signupData.fullName}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="Enter Your Email"
                                className="bg-transparent px-2 py-1 border"
                                onClick={handleUserInput}
                                value={signupData.email}
                            />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder="Enter Your Password"
                                className="bg-transparent px-2 py-1 border"
                                onClick={handleUserInput}
                                value={signupData.password}
                            />
                        </div>

                        <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                            Create Account
                        </button>

                        <p className="text-center">
                            Already have an account ? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                        </p>
                    </form>
                </div>
            </HomeLayout>
        </>
    )
}
export default Signup;