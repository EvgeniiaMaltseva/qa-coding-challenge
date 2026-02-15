import { Page, Locator } from '@playwright/test';

export class VersicherungsstatusPage {
    readonly gesetzlichVersichertOpton: Locator;
    readonly privatVersichertOption: Locator;
    readonly weiterBtn: Locator;

    constructor (public readonly page: Page) {
        this.gesetzlichVersichertOpton = page.locator('[data-cy="insurance-status-statutory"]');
        this.privatVersichertOption = page.locator('[data-cy="insurance-status-private"]');
        this.weiterBtn = page.locator('[data-cy="insurance-status-continue"]');
    }
}