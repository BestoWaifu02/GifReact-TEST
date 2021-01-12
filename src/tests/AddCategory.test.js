import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../components/AddCategory";
import React from "react";

describe("Pruebas en el componente AddCategory", () => {
  //Funcion de props, al usar jest como funcion podemos tener las datos de la funcion
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    //Limpiar la simulacion
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    //Debemos mandar el evento (mandamos un objeto con las props)
    input.simulate("change", {
      target: {
        value,
      },
    });
  });

  test("NO debe de postear la info con submit", () => {
    //Simulamos el submit, Mandalos un metodo de un objeto
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Food";
    //Simular el change del input, mandamos el e con una propiedad target
    wrapper.find("input").simulate("change", {
      target: {
        value,
      },
    });
    //Simulando en submit del form
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    //setCategories debe ser llamado, puedes mandar de argumento los tiempos
    expect(setCategories).toHaveBeenCalled();
    //puedes tambien checar con que se llamo a la funcion expect.any(Function)
    const text = wrapper.find("input").text();
    expect(text).toBe("");

    /* Otra forma
    expect(wrapper.find("input").prop('value')).toBe('');
    
    */
  });
});
