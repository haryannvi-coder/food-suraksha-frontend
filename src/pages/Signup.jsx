import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"




export function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate();

    return <div className="flex justify-center min-h-screen dark:bg-slate-900">
        <div className=" text-center m-14 text-gray-200 space-y-4" >
            <Heading label={"Signup"} />

            <SubHeading label={"Enter your info to create an account"} />

            <InputBox onChange={(e) => {
                setName(e.target.value)
            }} placeholder={"name"} />

            <InputBox  onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder={"email"} />

            <InputBox onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder={"password"} />

            <Button onClick={async () => {
                try {
                    const res = await axios.post(`http://localhost:3000/api/v1/fso/signup`, {
                        name,
                        email,
                        password
                    })

                    navigate('/dashboard')

                } catch (error) {
                    console.log("errror in signup")
                }
            }} label={"Sign Up"} />

            <BottomWarning label={"Already have account?"} buttonText={"Signin"} to={"/signin"} />            
        </div>
    </div>
}