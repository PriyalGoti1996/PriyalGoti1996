import { useState } from "react";

function Conditional_render() {

    const [login, setlogin] = useState(false);
    //logedin function
    const Logedin = () => {
        setlogin(false)

    }
    //logedout function
    const Logedout = () => {
        setlogin(true)
    }
    if (login === true) {
        return (
            <div>
                <button onClick={() => Logedin()}>Login</button>
                <h1>You Have Login</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <button onClick={() => Logedout()}>Logout</button>
                <h1>You Have Logout</h1>
            </div>
        )
    }

}
export default Conditional_render;

