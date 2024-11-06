import ClassComponent from "../components/ClassComponent";
import renderer from "react-test-renderer";

test("Class component testing",()=>{
    const componentData = renderer.create(<ClassComponent/>).getInstance();
    expect(componentData.getText()).toMatch("Testing")
})