import { useState } from "react"

const InputOnclick = () => {
    const [data, setData] = useState("")

    return (<div>
        <h1>Test Click Event With Button</h1>
        <button onClick={() => setData("updated data")}>Update Data</button>
        <h1>{data}</h1>
    </div>)
}

export default InputOnclick