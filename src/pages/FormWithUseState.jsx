import {useState} from "react";

const FormWithUseState = () => {

    let [formObj, setFormObj] = useState({
        fName: "",
        lName: "",
        city: "",
        gender: ""
    });

    const inputOnChange = (property, value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]: value
        }))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formObj);
        alert(JSON.stringify(formObj));
    }

    return (
        <>
            <div>
                <h1 className="text-success">Form with use state</h1>
                <form onSubmit={formSubmit}>
                    <input onChange={(e) => {
                        inputOnChange("fName", e.target.value)
                    }} value={formObj.fName} placeholder="First Name"/>

                    <input onChange={(e) => {
                        inputOnChange("lName", e.target.value)
                    }} value={formObj.lName} placeholder="Last Name"/>

                    <select onChange={(e) => {
                        inputOnChange("city", e.target.value)
                    }} value={formObj.city}>
                        <option value="">Choose City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Rangpur">Rangpur</option>
                    </select>
                    <br/>

                    <input onChange={() => {
                        inputOnChange("gender", 'Male')
                    }} checked={formObj.gender === "Male"} type="radio" name="gender"/> Male
                    <input onChange={() => {
                        inputOnChange("gender", 'Female')
                    }} checked={formObj.gender === "Female"} type="radio" name="gender"/> Female
                    <br/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default FormWithUseState