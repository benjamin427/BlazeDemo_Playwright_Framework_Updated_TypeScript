import {type Page, expect, test} from '@playwright/test'
import {BlazeDemo_Login} from '../login/page_objects/login';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test.beforeEach( async({page}) => {
    const login = new BlazeDemo_Login(page as any)
    logger.info(`tests/login/edge_test_login_form.spec.ts: Test execution to detect error messages on the login form`)
    await login.visitWebsiteLogin()
})

test("Entering special characters for email text field with expected password input. Should display a prompt error message", async({page}) => {
    const login = new BlazeDemo_Login(page as any)

    ////Environment functions that will access to the environment variables
    const reference_password = getEnvValue('BLAZEDEMO_LOGIN_PASSWORD', 'blazedemo')
    const reference_special_characters = getEnvValue('BLAZEDEMO_LOGIN_SPECIAL_CHARACTERS', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')

    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.test_login(reference_special_characters, reference_password)
    
})
test("Entering special characters for password text field with expected email input. Should display a prompt error message", async({page}) => {
    const login = new BlazeDemo_Login(page as any)
    const reference_emailAddress = getEnvValue('BLAZEDEMO_LOGIN_EMAIL', 'blazedemo')
    const reference_special_characters = getEnvValue('BLAZEDEMO_LOGIN_SPECIAL_CHARACTERS', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')

    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.test_login(reference_emailAddress, reference_special_characters)
    
})

test.afterEach(async({page}, testInfo) => {
    const login  = new BlazeDemo_Login(page as any)
    const status = testInfo.status ?? 'undefined'
    if (status === 'failed'){
        logger.error(`tests/home/login/edge_test_login_form.spec.ts: Test exxecution failed at step "${testInfo.title}"`)
    } else {
        logger.info(`tests/home/login/edge_test_login_form.spec.ts: Test execution commpletd with status ${testInfo.status?.toUpperCase()}`)
    }
    await login.close()
})
