import {expect, test} from '@playwright/test';
import {BlazeDemo_PasswordReset} from '../password_reset/page_objects/password_reset';
import logger from '../../util/loggger';
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Submit and empty form. Should display an error prompt message", async({page}, testInfo) => {
    const passwordReset = new BlazeDemo_PasswordReset(page as any)
    const reference_endpoint = getEnvValue('BLAZEDEMO_PASSWORD_RESET_ENDPOINT', 'blazedemo')
    const reference_title = getEnvValue('BLAZEDEMO_PASSWORD_RESET_TITLE', 'BlazeDemo')
    await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_1.spec.ts: Test execution to verify errors in the password reset form`)
    const status = testInfo.status ?? 'undefined'
    await passwordReset.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_endpoint)
    await passwordReset.negative_test_password_reset_form()
    if (status === 'failed'){
        await logger.error(`tests/password_reset/negative_test_password_reset_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/password_reset/negative_test_password_reset_form.spec.ts: Test completed with status ${testInfo.status?.toUpperCase()}`)
    }
    await passwordReset.close()
})
