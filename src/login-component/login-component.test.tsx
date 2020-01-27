import React from "react";
import { shallow } from "enzyme";

import LoginComponent from "./login-component";

describe("Login Page", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<LoginComponent {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as default", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
