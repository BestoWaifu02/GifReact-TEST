import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";
import { GifGrid } from "../components/GifGrid";

describe("Pruebas en el componente GifExpertApp", () => {
  test("Debe hacer match con la snapshot ", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["dragon ball", "ghalo"];
    const wrapper = shallow(<GifExpertApp defaultprops={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
