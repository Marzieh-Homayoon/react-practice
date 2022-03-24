import React from "react";
import "../setupTest";
import { shallow } from "enzyme";
import Form from "./Form";

it ("Render without crashing", () => {
    shallow(<Form/>);
});

it('calls onSubmit prop function when form is submitted', () => {
    const submitHandler = jest.fn();
    const wrapper = shallow(<Form onSubmit={submitHandler} />);
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const form = wrapper.find('form');
    form.simulate("submit", fakeEvent);
    setTimeout(() => {
        expect(submitHandler).toHaveBeenCalledTimes(1);
        done();
      }, 0);
});

  