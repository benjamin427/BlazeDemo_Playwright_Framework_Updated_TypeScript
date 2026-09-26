export class BlazeDemo_PasswordReset {
    page: any;
    emailAddress: any;
    submitButton: any;
    constructor(page: {getByRole: (arg0: string, arg1: {name: string}) => any}){
        this.page = page
        this.emailAddress = page.getByRole('textbox', {name: "E-Mail Address"})
        this.submitButton = page.getByRole("button", {name: "Send Password Reset Link"})
    }

    async visitWebsite(){
        await this.page.goto("https://www.blazedemo.com/password/reset")
    }

    async test_password_reset_form(email_address: string){
        await this.emailAddress.fill(email_address, {timeout: 45000})
        await this.submitButton.click({timeout: 45000})
    }
    async negative_test_password_reset_form(){
        await this.submitButton.click({timeout: 45000})
    }
    async close(){
        await this.page.close({timeout: 45000})
    }
}