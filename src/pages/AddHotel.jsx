import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export function AddHotel(){
    const [managerEmail, setManagerEmail] = useState("")
    const [name, setName] = useState("")
    const [district, setDistrict] = useState("")

    const navigate = useNavigate();

    return <div className="flex justify-center min-h-screen ">
        <div className=" text-center m-14 text-gray-200 space-y-4" >
            <Heading label={"Add a new Hotel"} />

            <SubHeading label={"Enter the info to add new hotel"} />

            <InputBox onChange={(e) => {
                setName(e.target.value)
            }} placeholder={"name"} />

            <InputBox  onChange={(e) => {
                setDistrict(e.target.value)
            }} placeholder={"district"} />

            <InputBox onChange={(e) => {
                setManagerEmail(e.target.value)
            }} placeholder={"managerEmail"} />

            <Button onClick={async () => {
                try {
                    const res = await axios.post(`https://food-suraksha-backend.onrender.com/api/v1/hotel/add`, {
                        name,
                        district,
                        managerEmail
                    })

                    navigate('/fsodashboard')

                } catch (error) {
                    console.log("errror in signup")
                }
            }} label={"Add"} />

            <BottomWarning buttonText={"Go to Dashboard"} to={"/fsodashboard"} />            
        </div>
    </div>
}