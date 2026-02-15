import { Page, Locator } from "@playwright/test";

export class GlobalPage {

    readonly baseURL: string;
    readonly acceptCookiesBtn: Locator;

    constructor (public readonly page: Page) {
        this.acceptCookiesBtn = page.getByRole("button", { name: "Alles akzeptieren" });
        this.baseURL = process.env.UI_BASE_URL || '';
    }

    async gotoBerufsstatusPage() {
        await this.page.goto(this.baseURL);
    }

    async acceptAllCookies() {
        try {
            await this.acceptCookiesBtn.waitFor({ state: 'visible', timeout: 5000 });
            await this.acceptCookiesBtn.click();
        }
        catch (e) {
            console.log("Cookie banner did not show up");
        }
    }

}