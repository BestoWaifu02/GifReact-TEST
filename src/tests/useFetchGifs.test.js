import { useFetchGifs } from "../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
describe("Pruebas en el Custom Hook useFetchGifs", () => {
  test("Debe de retornar el estado inicial ", async () => {
    /* TESTING DE HOOKS */
    //Crea un componente virtual para poner el hook,El hook retorna el state (array vacio y loading true)
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("food")
    );
    const { data, loading } = result.current;
    //const { data: images, loading } = useFetchGifs(category);
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe de retornar  un array de imgs y el loading en FALSE", async () => {
    //Wait for next update,retorna un promesa
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("food")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    //const { data: images, loading } = useFetchGifs(category);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
