import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

jest.mock("../hooks/useFetchGifs");

describe("Pruebas en el componente GifGrid", () => {
  const category = "love";

  test("Hacer match con la snapshot ", () => {
    //Falseamos la info
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes con el hookFetch", () => {
    const gifs = [
      {
        id: "adb",
        url: "https://siiiiii.jpg",
        title: "loquesea",
      },
      {
        id: "123",
        url: "https://siiiiii.jpg",
        title: "loquesea",
      },
    ];
    //Simular que ya tenemos data
    //Falseamos la info
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    //ver que no exista el P
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
