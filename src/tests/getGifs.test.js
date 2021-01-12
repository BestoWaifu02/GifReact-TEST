import { getGifs } from "../helpers/getGifs";

describe("Pruebas en la funcion FETCH getGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    //Retorna una promesa
    const gifs = await getGifs("Love");
    expect(gifs.length).toBe(10);
  });
  test("Debe retornar un array vacio", async () => {
    //Retorna una promesa
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
