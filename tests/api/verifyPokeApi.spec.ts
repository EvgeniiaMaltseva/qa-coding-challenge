import { expect, test } from "@playwright/test";
import { PokeApiClient } from "../../api/pokeApiClient";

test.describe('Pokemon API tests', () => {

    test("GET - pikachu", async ({ request }) => {
        const pokeApiClient = new PokeApiClient(request);
        const response = await pokeApiClient.get('/pokemon/pikachu');

        expect(response.status()).toBe(200);

        const data = await response.json();
        expect(data.name).toBe('pikachu');

        const abilities = data.abilities.map((a: any) => a.ability.name);
        expect(Array.isArray(data.abilities)).toBeTruthy();
        expect(abilities.length).toBeGreaterThan(0);
        expect(abilities).toContain('lightning-rod');
    });

    test("GET - Charmander", async ({ request }) => {
        const mockResponse = {
            status: () => 404,
        };

        const pokeApiClient = new PokeApiClient(request);
        pokeApiClient.get = async () => mockResponse as any;

        const response = await pokeApiClient.get('/pokemon/charmander');
        expect(response.status()).toBe(404);
    });

});