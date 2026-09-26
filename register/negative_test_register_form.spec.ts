import {expect, test} from '@playwright/test';
import {BlazeDemo_Register} from './page_objects/register';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test.beforeEach(async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    await logger.info(`test/register/negative_test_register_form.spec.ts: Test execution to verify error messages`)
    await register.visitWebsite()
})

test("Submit a blank register form. Should display a error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_URL', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank()
    
})
test("Submit a form with a blank name text field. Should display an error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_URL', 'blazedemo')
    const reference_company = getEnvValue('BLAZEDEMO_REGISTER_COMPANY', 'blazedemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_REGISTER_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank_name(reference_company, reference_emailAddress, reference_password, reference_password)
})
test("Submit a form with a blank company text field. Should display an error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_ENDPOINT', 'blazedemo')
    const reference_name = getEnvValue('BLAZEDEMO_REGISTER_NAME', 'blazedemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_REGISTER_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank_company(reference_name, reference_emailAddress, reference_password, reference_password)
})
test("Submit a form with a blank email text field. Should display an error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_ENDPOINT', 'blazedemo')
    const reference_name = getEnvValue('BLAZEDEMO_REGISTER_NAME', 'blazedemo')
    const reference_company = getEnvValue('BLAZEDEMO_REGISTER_COMPANY', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank_email(reference_name, reference_company, reference_password, reference_password)
})
test("Submit a form with a blank password text field. Should display an error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_ENDPOINT', 'blazedemo')
    const reference_name = getEnvValue('BLAZEDEMO_REGISTER_NAME', 'blazedemo')
    const reference_company = getEnvValue('BLAZEDEMO_REGISTER_COMPANY', 'blazedemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_REGISTER_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank_password(reference_name, reference_company, reference_emailAddress, reference_password)
})

test("Submit a form with a blank confirm password text field. Should return an error prompt message", async({page}) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_ENDPOINT', 'blazedemo')
    const reference_name = getEnvValue('BLAZEDEMO_REGISTER_NAME', 'blazedemo')
    const reference_company = getEnvValue('BLAZEDEMO_REGISTER_COMPANY', 'blazedemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_REGISTER_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.negative_test_register_blank_passwordConfirm(reference_name, reference_company, reference_emailAddress, reference_password)
})

test.afterEach(async({page}, testInfo) => {
    const register = new BlazeDemo_Register(page as any)
    const status = testInfo.status ?? 'undefined'
    if (status === 'failed'){
        await logger.error(`tests/register/negative_test_register_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/register/negative_test_register_form.spec.ts: Test commpleted with status ${testInfo.status?.toUpperCase()}`)
    }
    await register.close()
})
