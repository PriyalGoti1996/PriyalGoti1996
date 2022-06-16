import { useState } from "react";

function Form() {
    const [dataform, setdataform] = useState({
        FirstName: "",
        LastName: "",
        Password: "",
        Email: "",
        BirthData: "",
        Gender: "",
        City: "",
        Address: "",
        State: "",
        

    })
    const [check, setchecked] = useState({

        Male: false,
        Female: false

    })
    //  console.log(dataform)

    const handlechnge = (event) => {
        const { name, value } = event.target
        setdataform({
            ...dataform,
            [name]: value
        })
    }
    // gender in radiochand event//
    const radiochange = (event) => {
        const { name, value } = event.target
        setchecked({
            ...check,
            [event.target.value]: true
        })
        setdataform({
            ...dataform,
            Gender: value
        })
    }
    let handalsubmit = (event) => {
        event.preventDefault();
        setdataform({
            ...dataform,
            FirstName: "",
            LastName: "",
            Password: "",
            Email: "",
            BirthData: "",
            Gender: "",
            City: "",
            State: "",
            Address:""
           
        })
        setchecked({

            Male: false,
            Female: false
        })
        console.log(dataform)

    }
    return (
        <div className="contain">
            <h1 className="handing">Registration Form</h1>
            <form onSubmit={handalsubmit} className="form_main">
                {/* //first row// */}
                <div className="first_row">
                    <div className="div_first">
                        <label className="div_label">First Name:</label>
                        <input type="text" name="FirstName" className="div_input" value={dataform.FirstName} onChange={handlechnge} />
                    </div>
                    <div className="div_second">
                        <label className="div_label">Last Name:</label>
                        <input type="text" name="LastName" className="div_input" value={dataform.LastName} onChange={handlechnge} />
                    </div>
                </div>
                {/* //second row// */}
                <div className="first_row">
                    <div className="div_second">
                        <label className="div_label">Password:</label>
                        <input type="password" name="Password" className="div_input" value={dataform.Password} onChange={handlechnge} />
                    </div>
                    <div className="div_first">
                        <label className="div_label">Email:</label>
                        <input type="email" name="Email" className="div_input" value={dataform.Email} onChange={handlechnge} />
                    </div>

                </div>
                {/* //thred row//*/}
                <div className="first_row">
                    <div className="div_first">
                        <label className="div_label">BirthData:</label>
                        <input type="datetime-local" name="BirthData" className="div_input" value={dataform.BirthData} onChange={handlechnge} />
                    </div>
                    <div className="div_second">
                        <label className="div_label">Gender:</label>
                        <input type="radio" name="gender" value={"Male"} onChange={radiochange} />Male
                        <input type="radio" name="gender" value={"Female"} onChange={radiochange} />Female
                    </div>
                </div>

                {/* //fourd row// */}
                <div className="first_row">
                    <div className="div_first">
                        <label className="div_label">City:</label>
                        <input type="text" name="City" className="div_input" value={dataform.City} onChange={handlechnge} />
                    </div>
                    <div className="div_second">
                        <label className="div_label">State:</label>
                        <input type="text" name="State" className="div_input" value={dataform.State} onChange={handlechnge} />
                    </div>
                </div>
                {/* //fifth row// */}
                <div className="first_row">
                    <div className="div_first">
                        <label className="div_label">Address:</label><br />
                        <textarea type="text" name="Address" rows="6" cols="50" className="div_input" value={dataform.Address} onChange={handlechnge} />
                    </div>
                </div>
                {/* //submit// */}
                <div className="submit">
                    <input type="submit" name="submit" />

                </div>


            </form>
        </div>
    )
}
export default Form;