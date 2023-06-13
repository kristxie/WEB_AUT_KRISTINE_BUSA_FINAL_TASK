import formPage from "../pageObjects/form.Page";

describe('Final task', () => {
  context("Practice form scenarios", () => {
    beforeEach(() => {
      formPage.visit();
    });

    it('Practice form positive test', () => {

      //Necessary information
      formPage.firstNameInput.type('Kristine');
      formPage.surnameInput.type('Busa');
      formPage.emailInput.type('kristine@busa.lv');
      formPage.genderPick.click({force: true});
      formPage.phoneNrInput.type('12345678');
      formPage.addressInput.type('Kristiines iela 8a');

      //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
      formPage.calendarWidget.click();
      formPage.selectYear.select('1930');
      formPage.selectMonth.select('February');
      formPage.selectDate.click();

      // Set Subjects to Economics and Hobbies to Music.
      formPage.selectSubjects.type('Economics');
      formPage.firstSubjectAutocomplete.click();
      formPage.selectHobbies.click({force: true});

      //Upload image
      formPage.selectFileButton.selectFile('./files/mitsuha.jpg');

      // Set State to NCR
      formPage.selectState.click();
      formPage.selectNCR.click();

      // Set City to Delhi
      formPage.selectCity.click();
      formPage.selectDehli.click();

      // Click Submit
      formPage.submitButton.click();

      // Checking everything
      formPage.tableRow.contains('Student Name').siblings().should('have.text','Kristine Busa')
      formPage.tableRow.contains('Student Email').siblings().should('have.text','kristine@busa.lv');
      formPage.tableRow.contains('Gender').siblings().should('have.text','Female');
      formPage.tableRow.contains('Mobile').siblings().should('have.text','12345678');
      formPage.tableRow.contains('Date of Birth').siblings().should('have.text','28 February,1930');
      formPage.tableRow.contains('Subjects').siblings().should('have.text','Economics');
      formPage.tableRow.contains('Hobbies').siblings().should('have.text','Music');
      formPage.tableRow.contains('Picture').siblings().should('have.text','mitsuha.jpg');
      formPage.tableRow.contains('Address').siblings().should('have.text','Kristiines iela 8a');
      formPage.tableRow.contains('State and City').siblings().should('have.text','NCR Delhi');
    })
  });
})