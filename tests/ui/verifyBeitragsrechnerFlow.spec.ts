import { test, expect } from '../../fixtures/form.fixtures';
import { VersicherungwunschPage } from '../../pages/versicherungswunsch.page';
import { GeburtstagPage } from '../../pages/geburtstag.page';
import { BerufsstatusPage } from '../../pages/berufsstatus.page';
import { beitragsrechnerFlows } from '../../test-data/beitragsrechner.data';
import { VersicherungsstatusPage } from '../../pages/versicherungsstatus.page';
import birthdates from "../../test-data/birthdates.json";

test.describe('Beitragsrechner Flow', () => {

  test('Test verifies "Angestellt" flow with birthdate validation error checks', async ({ initialPage, page }) => {
    const data = beitragsrechnerFlows.angestellt();

    const berufsstatusPage = new BerufsstatusPage(page);
    await berufsstatusPage.selectBerufsstatus(data.berufsstatus);
    await berufsstatusPage.enterEinkommen(data.einkommen);
    await berufsstatusPage.clickWeiterBtn();

    const versicherungwunschPage = new VersicherungwunschPage(page);
    await versicherungwunschPage.selectVersicherung(data.versicherung);
    await versicherungwunschPage.selectVersicherungStartDate(data.versicherungStart);
    await versicherungwunschPage.clickWeiterBtn();

    const geburtstagPage = new GeburtstagPage(page);

    for (const birthdate of birthdates) {
      await geburtstagPage.enterGeburtstag(birthdate.day, birthdate.month, birthdate.year);

      if (birthdate.isValid) {
        await expect(geburtstagPage.errorMessageTxt).toBeHidden();
      } else {
        await expect(geburtstagPage.errorMessageTxt).toBeVisible();
        await expect(geburtstagPage.errorMessageTxt).toContainText(birthdate.errorMessage);
      }
    }
    
    await geburtstagPage.enterGeburtstag(
      data.geburtstag.day, 
      data.geburtstag.month, 
      data.geburtstag.year
    );
    await geburtstagPage.clickWeiterBtn();

    const versicherungsstatusPage = new VersicherungsstatusPage(page);
    await expect(versicherungsstatusPage.gesetzlichVersichertOpton).toBeVisible();
    await expect(versicherungsstatusPage.privatVersichertOption).toBeVisible();
    await expect(versicherungsstatusPage.gesetzlichVersichertOpton).toHaveText("Ich bin gesetzlich versichert");
    await expect(versicherungsstatusPage.weiterBtn).toBeEnabled();
  });
});


