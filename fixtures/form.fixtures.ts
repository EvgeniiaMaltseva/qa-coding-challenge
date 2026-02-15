import { test as base }  from "@playwright/test";
import { BerufsstatusPage } from "../pages/berufsstatus.page";
import { VersicherungwunschPage } from "../pages/versicherungswunsch.page";
import { GlobalPage } from "../pages/global.page";

type MyFixtures = {
    initialPage: GlobalPage;
};

export const test = base.extend<MyFixtures>({
    initialPage: async ({ page }, use) => {
        const initialPage = new GlobalPage(page);
        await initialPage.gotoBerufsstatusPage();
        await initialPage.acceptAllCookies();

        await use(initialPage);
    },
});

export { expect } from '@playwright/test';