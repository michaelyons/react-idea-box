import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./Header";

describe("Header Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
});
