describe("Prueba <DemoComponent />", () => {
    test("esta prueba debe pasar", () => {
        // 1. inicializacion
        const message1 = "Hola Mundo";
        // 2. estimulo
        const message2 = message1.trim();
        // 3. esperar el comportamiento   .....esperado
        expect(message1).toBe(message2);
    });
});
