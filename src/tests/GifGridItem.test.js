import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";
import React from "react";

import "@testing-library/jest-dom/extend-expect";
describe("Pruebas en el componente GifGridItem", () => {
  //Props
  const title = "Example";
  const url = "https://";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe hacer match con la snapshot del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un Parrafo con el title", () => {
    //Obtenemos el parrafo
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener la imagen igual al de la URL y alt de los", () => {
    const img = wrapper.find("img");
    //Ver props html de la IMG
    /* console.log(img.html())
    console.log(img.prop('src')) */
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Que el div tenga sus clases (buscando solo 1)", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    // console.log(div.html());
    //Vemos que className incluya animate_fadeIn y que sea true
    expect(className.includes("animate__animated animate__fadeIn")).toBe(true);
  });
});
