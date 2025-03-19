import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom"


export function Signin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return <div className="flex justify-center min-h-screen " >
        <div className="text-center m-20 text-gray-200 space-y-4" >
            <Heading label="Signin" />

            <SubHeading label={"Enter your info to access your account"} />

            <InputBox onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder={"email"} />

            <InputBox onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder={"password"} />

            <Button onClick={async () => {
                try {
                    if (email === "keralaminister@gmail.com" && password === "123") {
                    navigate("/cmdashboard");
                    } else {
                    navigate("/fsodashboard");
                    }
                }
                catch (error) {
                    console.log(res);
                }
            }} label={"Sign In"} />

            <BottomWarning label={"Don't have account?"} buttonText={"Signup"} to={"/signup"} />     
        </div>
    </div>
}