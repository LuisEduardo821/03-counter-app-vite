import { getSaludo } from "../../bases-pruebas/02-template-string";

describe("en archivo 02-template-string", () => {
    test("getSaludo debe de retornar hola Luis Eduardo", () => {
        const name = "fernando";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});
