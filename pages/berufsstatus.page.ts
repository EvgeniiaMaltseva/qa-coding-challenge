import type { Page, Locator } from "@playwright/test";

export class BerufsstatusPage {

    private readonly einkommenInputField: Locator;
    private readonly weiterBtn: Locator;

    constructor(public readonly page: Page) {
        this.einkommenInputField = page.locator('[data-cy="income-input"]');
        this.weiterBtn = page.locator('[data-cy="employment-status-continue"]');
    }

    async selectBerufsstatus(option: string) {
        await this.page.locator(`[data-cy="employment-status-option-${option}"]`).click();
    }

     async clickWeiterBtn() {
        await this.weiterBtn.click();
     }

     async enterEinkommen(option: string) {
        await this.einkommenInputField.fill(option);
     }
}