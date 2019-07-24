import { Sensor } from "../entidades/sensor";
import { SensorRepositorio } from "./sensorRepositorio";

const sensor: Sensor = {
    planta: "Morango",
    status: "Umidade ideal"
}

test('cria sensor', async () => {
    const mockFn = jest.fn(() => sensor);
    jest.spyOn(SensorRepositorio, 'criar').mockImplementation(async() => mockFn());

    let resultado = await SensorRepositorio.criar(sensor);
    expect(mockFn).toHaveBeenCalled();
    expect(resultado).toBe(sensor);
});