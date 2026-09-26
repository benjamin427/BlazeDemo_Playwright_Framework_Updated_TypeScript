export class BlazeDemo_Register{
    page: any;
    name: any;
    company: any;
    emailAddress: any;
    password: any;
    confirmPassword: any;
    submitButton: any;
    constructor(page: {getByRole: (arg0: string, arg1: {name: string}) => any, locator: (arg0: string) => any}){
        this.page = page
        this.name = page.getByRole('textbox', {name: "Name"})
        this.company = page.getByRole('textbox', {name: "Company"})
        this.emailAddress = page.getByRole('textbox', {name: "E-Mail Address"})
        this.password = page.locator("#password")
        this.confirmPassword = page.getByRole('textbox', {name: "Confirm Password"})
        this.submitButton = page.getByRole('button', {name: "Register"})
    }
    async visitWebsite(){
        await this.page.goto("https://www.blazedemo.com/register")
    }
    async test_register_form(name: string, company: string, email_address: string, password: string, password_confirm: string) {
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_name(company: string, email_address: string, password: string, password_confirm: string){
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_company(name: string, email_address: string, password: string, password_confirm: string){
        await this.name.fill(name)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_email(name: string, company: string, password: string, password_confirm: string){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.password.fill(password)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_password(name: string, company: string, email_address: string, password_confirm: string){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.confirmPassword.fill(password_confirm)
        await this.submitButton.click()
    }
    async negative_test_register_blank_passwordConfirm(name: string, company: string, email_address: string, password: string){
        await this.name.fill(name)
        await this.company.fill(company)
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_register_blank(){
        await this.submitButton.click()
    }
    async close(){
        await this.page.close()
    }
}