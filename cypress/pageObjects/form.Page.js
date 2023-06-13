class formPage{
    static get url(){
        return "/automation-practice-form";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get firstNameInput(){
        return cy.get('#firstName');
    }

    static get surnameInput(){
        return cy.get('#lastName');
    }

    static get emailInput(){
        return cy.get('#userEmail');
    }

    static get genderPick(){
        return cy.get('#gender-radio-2');
    }

    static get phoneNrInput(){
        return cy.get('#userNumber');
    }

    static get addressInput(){
        return cy.get('#currentAddress');
    }

    static get calendarWidget(){
        return cy.get('.react-datepicker-wrapper');
    }

    static get selectYear(){
        return cy.get('.react-datepicker__year-select');
    }

    static get selectMonth(){
        return cy.get('.react-datepicker__month-select')
    }

    static get selectDate(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }

    static get selectSubjects(){
        return cy.get('#subjectsInput');
    }

    static get firstSubjectAutocomplete(){
        return cy.get('#react-select-2-option-0');
    }

    static get selectHobbies(){
        return cy.get('#hobbies-checkbox-3');
    }

    static get selectFileButton(){
       return cy.get('input[type=file]');
    }

    static get selectState(){
        return cy.get('#state');
    }

    static get selectNCR(){
        return cy.get('#react-select-3-option-0');
    }

    static get selectCity(){
        return cy.get('#city');
    }

    static get selectDehli(){
        return cy.get('#react-select-4-option-0');
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static get tableRow(){
        return cy.get('tr');
    }

}
export default formPage;