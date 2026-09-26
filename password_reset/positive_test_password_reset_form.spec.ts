import {expect, test} from '@playwright/test';
import { BlazeDemo_PasswordReset } from '../password_reset/page_objects/password_reset';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Enter the required text format in the email text field", async({page}, testInfo) => {
    const resetPassword = new BlazeDemo_PasswordReset(page as any)
    const reference_endpoint = getEnvValue('BLAZEDEMO_PASSWORD_RESET_ENDPOINT', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_PASSWORD_RESET_TITLE', 'BlazeDemo')
    const reference_emailAddress = getEnvValue('BLAZEDEMO_PASSWORD_RESET_EMAIL', 'blazedemo')
    const status = testInfo.status ?? 'undefined'
    await logger.info(`tests/password_reset/positive_test_password_reset_form.spec.ts: Test execution of positive tests on the password reset form`)
    await resetPassword.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await resetPassword.test_password_reset_form(reference_emailAddress)
    if (status === 'failed'){
        await logger.error(`tests/password_reset/positive_test_password_reset_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/password_reset/positive_test_password_reset_form.spec.ts: Test complete with status ${testInfo.status?.toUpperCase()}`)
    }
    await resetPassword.close()
})
