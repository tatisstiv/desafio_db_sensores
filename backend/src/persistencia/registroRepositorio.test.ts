import { Sensor } from "../entidades/sensor";
import { Registro } from "../entidades/registro";
import { RegistroRepositorio } from "./registroRepositorio";

const sensor: Sensor = {
    planta: "Morango",
    status: "Umidade ideal"
}
const registro: Registro = {
    valorLeitura: 70,
    sensor: sensor
}

test('cria registro', async () => {
    const mockFn = jest.fn(() => registro);
    jest.spyOn(RegistroRepositorio, 'criar').mockImplementation(async()=>mockFn());

    let resultado = await RegistroRepositorio.criar(registro);
    expect(mockFn).toHaveBeenCalled();
    expect(resultado).toBe(registro);
});
