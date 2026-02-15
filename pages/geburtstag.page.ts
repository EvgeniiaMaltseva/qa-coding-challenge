import { Page, Locator } from '@playwright/test';

export class GeburtstagPage {
    private readonly geburtstagInputFieldDay: Locator;
    private readonly geburtstagInputFieldMonth: Locator;
    private readonly geburtstagInputFieldYear: Locator;
    private readonly weiterBtn: Locator;
    readonly errorMessageTxt: Locator;

    constructor (public page: Page) {
        this.geburtstagInputFieldDay = page.locator('[data-cy="day"]');
        this.geburtstagInputFieldMonth = page.locator('[data-cy="month"]');
        this.geburtstagInputFieldYear = page.locator('[data-cy="year"]');
        this.weiterBtn = page.locator('[data-cy="birthday-continue"]');
        this.errorMessageTxt = page.locator('[data-cy="invalid-age-validation-message"], [data-cy="negative-age-validation-message"]');
    }

    async enterGeburtstag(day: string, month: string, year: string) {
        await this.geburtstagInputFieldDay.clear();
        await this.geburtstagInputFieldMonth.clear();
        await this.geburtstagInputFieldYear.clear();
        await this.geburtstagInputFieldDay.fill(day);
        await this.geburtstagInputFieldMonth.fill(month);
        await this.geburtstagInputFieldYear.fill(year);
    }

    async clickWeiterBtn() {
        await this.weiterBtn.click();
    }
}