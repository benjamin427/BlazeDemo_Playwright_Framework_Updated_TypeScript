export class BlazeDemo_Login{
    page: any;
    emailAddress: any;
    password: any;
    submitButton: any;
    constructor(page: {getByRole: (arg0: string, arg1: {name: string}) => any}){
        this.page=page
        this.emailAddress=page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password=page.getByRole('textbox', {name: 'Password'})
        this.submitButton=page.getByRole('button', {name: 'Login'})
    }
    async visitWebsiteLogin(){
        await this.page.goto('https://www.blazedemo.com/login')
    }
    async test_login(email_address: string, password: string){
        await this.emailAddress.fill(email_address)
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_blank_email_login(password: string){
        await this.password.fill(password)
        await this.submitButton.click()
    }
    async negative_test_blank_password_login(email_address: string){
        await this.emailAddress.fill(email_address)
        await this.submitButton.click()
    }
    async negative_test_blank_login(){
        await this.submitButton.click()
    }
    async close(){
        await this.page.close()
    }
}