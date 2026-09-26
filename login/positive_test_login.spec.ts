import {type Page,  expect, test } from '@playwright/test'
import { BlazeDemo_Login } from '../login/page_objects/login';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Entering expected input for email and password text fields to log in successfully", async({page}, testInfo) => {
    const login = new BlazeDemo_Login(page as any)
    const reference_emailAddress = getEnvValue('BLAZEDEMO_LOGIN_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_LOGIN_PASSWORD', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_LOGIN_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_LOGIN_ENDPOINT', 'blazedemo')
    const status = testInfo.status ?? 'undefined'
    await logger.info(`tests/login/positive_test_login.spec.ts: Positive test execution of login form`)
    await login.visitWebsiteLogin()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await login.test_login(reference_emailAddress, reference_password)
    if (status === 'failed'){
        await logger.error(`tests/login/positive_test_login.spec.ts: Test failed a step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/login/positive_test_login.spec.ts: Test complete with status ${testInfo.status?.toUpperCase()}`)
    }
    await login.close()
})