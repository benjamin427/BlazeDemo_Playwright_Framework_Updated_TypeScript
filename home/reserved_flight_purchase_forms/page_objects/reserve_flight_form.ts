export class BlazeDemo_FlightPurchase {
    page: any;
    name: any;
    address: any;
    city: any;
    state: any;
    zip_code: any;
    card_type_visa: any;
    card_type_diners_club: any;
    card_type_american_express: any;
    credit_card_number: any;
    month: any;
    year: any;
    name_on_card: any;
    checkboxRemember: any;
    submitButtonPurchaseFlight: any;
    constructor(page: {locator: (arg0: string) => any, getByRole: (arg0: string, arg1: {name: string}) => any}){
        this.page = page
        this.name = page.locator('#inputName')
        this.address = page.locator('#address')
        this.city = page.locator('#city')
        this.state = page.locator('#state')
        this.zip_code = page.locator('#zipCode')
        this.card_type_visa = page.locator('#cardType')
        this.card_type_diners_club = page.locator('#cardType')
        this.card_type_american_express = page.locator('#cardType')
        this.credit_card_number = page.locator('#creditCardNumber')
        this.month = page.locator("#creditCardMonth")
        this.year = page.locator("#creditCardYear")
        this.name_on_card = page.locator('#nameOnCard')
        this.checkboxRemember = page.locator("#rememberMe")
        this.submitButtonPurchaseFlight = page.getByRole('button', {name: "Purchase Flight"})
    }
    async gotoWebsiteSource(){
        await this.page.goto("https://www.blazedemo.com/purchase.php")
    }
    async test_reserved_flight_form(name: string, address: string, city: string, state: string, zip_code: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zip_code, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_name(address: string, city: string, state: string, zipCode: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_address(name: string, city: string, state: string, zipCode: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_city(name: string, address: string, state: string, zipCode: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_state(name: string, address: string, city: string, zipCode: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_zip_code(name: string, address: string, city: string, state: string, creditCardNumber: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_credit_card_number(name: string, address: string, city: string, state: string, zipCode: string, month: string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_month(name: string, address: string, city: string, state: string, zipCode: string, creditCardNumber:string, year: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_year(name: string, address: string, city: string, state: string, zipCode: string, creditCardNumber: string, month: string, nameOnCard: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.name_on_card.fill(nameOnCard, {timeout: 45000})
    }
    async negative_test_reserved_flight_form_blank_name_on_card(name: string, address: string, city: string, state: string, zipCode: string, creditCardNumber: string, month: string, year: string){
        await this.name.fill(name, {timeout: 45000})
        await this.address.fill(address, {timeout: 45000})
        await this.city.fill(city, {timeout: 45000})
        await this.state.fill(state, {timeout: 45000})
        await this.zip_code.fill(zipCode, {timeout: 45000})
        await this.credit_card_number.fill(creditCardNumber, {timeout: 45000})
        await this.month.fill(month, {timeout: 45000})
        await this.year.fill(year, {timeout: 45000})
    }
    async select_card_visa(){
        await this.card_type_visa.selectOption('Visa', {timeout: 45000})
    }
    async select_card_diners_club(){
        await this.card_type_diners_club.selectOption("Diner's Club", {timeout: 45000})
    }
    async select_card_american_express(){
        await this.card_type_american_express.selectOption("American Express", {timeout: 45000})
    }
    async checkbox(){
        await this.checkboxRemember.setChecked(true)
    }
    async submitButton(){
        await this.submitButtonPurchaseFlight.click({timeout: 45000})
    }
    async close(){
         await this.page.close()
     }

    
}