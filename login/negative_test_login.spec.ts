import {type Page, expect, test} from '@playwright/test';
import {BlazeDemo_Login} from '../login/page_objects/login';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test.beforeEach( async({page}: {page: Page}) => {
    const login = new BlazeDemo_Login(page as any)
    await logger.info(`tests/login/negative_test_login.spec.ts: Test execution to detect errer prompt messages in the login form`)
    await login.visitWebsiteLogin()
})

test('Enter email address in text field and leave the password blank', async({page}) => {
    const login = new BlazeDemo_Login(page as any)
    const reference_emailAddress = getEnvValue('BLAZEDEMO_LOGIN_EMAIL', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.negative_test_blank_password_login(reference_emailAddress)
})
test("Enter the password in text field and leave the email blank", async({page}) => {
    const login = new BlazeDemo_Login(page as any)
    const reference_password = getEnvValue('BLAZEDEMO_LOGIN_PASSWORD', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.negative_test_blank_email_login(reference_password)

})
test("Leave email and password text fields blank. Should display a prompt error message", async({page}) => {
    const login = new BlazeDemo_Login(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.negative_test_blank_login()
})

test.afterEach(async({page}, testInfo) => {
    const login = new BlazeDemo_Login(page as any)
    const status = testInfo.status ?? 'undefined'
    if (status === 'failed') {
        await logger.error(`tests/login/negative_test_login.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/login/negative_test_login.spec.ts: Test complete with status ${testInfo.status?.toUpperCase}`)
    }
    await login.close()
})
