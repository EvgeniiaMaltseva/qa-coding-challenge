import { APIRequestContext, expect } from "@playwright/test";

export class PokeApiClient {
    private baseURL: string;
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseURL = process.env.POKEAPI_BASE_URL || '';
    }

    async get(endpoint: string, options?: any) {
        return await this.request.get(`${this.baseURL}${endpoint}`, options);
    }
}
