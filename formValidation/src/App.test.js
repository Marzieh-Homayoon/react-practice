import React from "react";
import "./setupTest";
import { shallow } from "enzyme";
import App from "./App";


it ("Render without crashing", () => {
  shallow(<App/>);
});

it ("Render H1 Tag", () => {
  const wrapper = shallow(<App/>);
  const welcome =  <h1>Test Tag</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});



