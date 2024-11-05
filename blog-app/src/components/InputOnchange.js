import {useState} from "react"

const InputOnchange = () => {
    const [data,setData] = useState("")

    return (<div>
        <h1>Test OnChange event with Input Text</h1>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>)
}

export default InputOnchange