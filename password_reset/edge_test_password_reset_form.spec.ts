import {expect, test} from '@playwright/test'
import {BlazeDemo_PasswordReset} from '../password_reset/page_objects/password_reset';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Enter special characters in the text field in attempt to submit. Should display an error prompt message", async({page}, testInfo) => {
    const resetPassword = new BlazeDemo_PasswordReset(page as any)
    const special_characters = getEnvValue('BLAZEDEMO_PASSWORD_RESET_SPECIAL_CHARACTERS', 'BlazeDemo')
    const reference_title = getEnvValue('BLAZEDEMO_PASSWORD_RESET_TITLE', 'BlazeDemo')
    const reference_endpoint = getEnvValue('BLAZEDEMO_PASSWORD_RESET_ENDPOINT', 'blazedemo')
    await logger.info(`tests/password_reset/edge_test_password_reset_form.spec.ts: Test execution for edge case testing`)
    const status = testInfo.status ?? 'undefined'
    await resetPassword.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await resetPassword.test_password_reset_form(special_characters)
    if (status === 'failed'){
        await logger.error(`tests/password_reset/edge_test_password_reset_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/password_reset/edge_test_password_reset_form.spec.ts: Test complete with status ${testInfo.status?.toUpperCase()}`)
    }
    await resetPassword.close()
})
