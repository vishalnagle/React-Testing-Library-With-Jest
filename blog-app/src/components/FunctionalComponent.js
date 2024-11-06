import { useState } from "react";
import handleOtherMethod from "../helper/helper";

const FunctionalComponent = () => {
    const [data, setData] = useState("")

    const updateData = () => {
        setData("hello")
    }

    return <div>
        <h2>Functional component testing</h2>
        <button data-testid="btn1" onClick={updateData}>Update</button>
        <h2>{data}</h2>
        {handleOtherMethod()}
    </div>
}

export default FunctionalComponent;