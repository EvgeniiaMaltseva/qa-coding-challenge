import { Page, Locator } from '@playwright/test';

export class VersicherungwunschPage {
    private readonly vollversicherungRadioBtn: Locator;
    private readonly zahnzusatztversicherung: Locator;
    private readonly versicherungStartDatePicker: Locator;
    private readonly weiterBtn: Locator;

    constructor (public readonly page: Page) {
        this.vollversicherungRadioBtn = page.locator('[data-cy="full-insurance"]');
        this.zahnzusatztversicherung = page.locator('[data-cy="dental-insurance"]');
        this.versicherungStartDatePicker = page.locator('[data-cy="ingress-date"]');
        this.weiterBtn = page.locator('[data-cy="insurance-product-continue"]');
    }

    async selectVersicherung(option: string) {
        switch(option) {
            case "Vollversicherung":
                await this.vollversicherungRadioBtn.click();
            break;

            case "Zahnzusatzt":
                await this.zahnzusatztversicherung.click();
            break;

            default:
                throw new Error(`Unknown category option: ${option}`);
        }
    }

    async selectVersicherungStartDate(option: string) {
        await this.versicherungStartDatePicker.selectOption(option);
    }

    async clickWeiterBtn() {
        await this.weiterBtn.click();
    }
}