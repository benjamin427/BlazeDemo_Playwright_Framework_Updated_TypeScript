import {expect, test} from '@playwright/test';
import {BlazeDemo_Register} from './page_objects/register';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Entered all text fields with expected text format", async({page}, testInfo) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_ENDPOINT', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_name = getEnvValue('BLAZEDEMO_REGISTER_NAME', 'blazedemo')
    const reference_company = getEnvValue('BLAZEDEMO_REGISTER_COMPANY', 'blazedemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_REGISTER_EMAIL', 'blazedemo')
    const reference_password = getEnvValue('BLAZEDEMO_REGISTER_PASSWORD', 'blazedemo')
    const status = testInfo.status ?? 'undefined'
    await logger.info(`tests/register/positive_test_register_form.spec.ts: Positive test execution to verify register form`)
    await register.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.test_register_form(reference_name, reference_company, reference_emailAddress, reference_password, reference_password)
    if (status === 'failed'){
        await logger.error(`tests/register/positive_test_register_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/register/positive_test_register_form.spec.ts: Test completed with status ${testInfo.status?.toUpperCase}`)
    }
    await register.close()
})
