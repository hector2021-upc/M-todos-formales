import React from "react";
import {render} from "@testing-library/react-native"
import App from "../App"
import Login from "../componentss/login/Login"
let component;
describe("",()=>{
  beforeEach(()=>{
    component= render(<App/>)
  })
  it('correcto', () => {
    console.log(component)
  });
})

