import {expect, test} from '@playwright/test'
import {BlazeDemo_Register} from './page_objects/register'
import logger from '../../util/loggger'
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test("Enter special characters in each field. Should display an error prompt message", async({page}, testInfo) => {
    const register = new BlazeDemo_Register(page as any)
    const reference_title = getEnvValue('BLAZEDEMO_REGISTER_TITLE', 'BlazeDemo')
    const reference_url = getEnvValue('BLAZEDEMO_REGISTER_URL', 'blazedemo')
    const reference_special_characters = getEnvValue('BLAZEDEMO_REGISTER_SPECIAL_CHARACTERS', 'blazedemo')
    const status = testInfo.status ?? 'undefined'
    await logger.info(`tests/register/edge_test_register_form.spec.ts: Test execution for edge case testing`)
    await register.visitWebsite()
    await expect(page).toHaveTitle(reference_title)
    await expect(page.url()).toContain(reference_url)
    await register.test_register_form(reference_special_characters, reference_special_characters, reference_special_characters, reference_special_characters,
        reference_special_characters
    )
    if (status === 'failed'){
        await logger.error(`tests/register/edge_test_register_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/register/edge_test_register-form.spec.ts: Test execution complete with status ${testInfo.status?.toUpperCase()}`)
    }
    await register.close()
})
