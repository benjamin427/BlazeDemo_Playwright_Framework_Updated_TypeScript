import logger from '../../../util/loggger'
import {type Page, expect, test} from '@playwright/test'
import {BlazeDemo_FlightPurchase} from './page_objects/reserve_flight_form'
const getEnvValue = (key: string, fallback: string): string => process.env[key] ?? fallback
declare const process: {env: {[key: string]: string | undefined}}

test.beforeEach(async({page}: {page: Page}) => {
    const purchaseReserveFlight = new BlazeDemo_FlightPurchase(page as any)
    await logger.info(`tests/home/reserved_flight_purchase_forms/regression_test_reserved_flight_purchase_form.spec.ts: Test execution to do regression testing on the flight purchase form`)
    await purchaseReserveFlight.gotoWebsiteSource()
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT', 'blazedemo')
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using Visa card", async({page}) => {
    const purchaseReserveFlight = new BlazeDemo_FlightPurchase(page as any)
    const referenceName = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME', 'blazedemo')
    const referenceAddress = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS', 'blazedemo')
    const referenceCity = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY', 'blazedemo')
    const referenceState = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE', 'blazedemo')
    const referenceZipCode = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE', 'blazedemo')
    const referenceCreditCardNumber = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER', 'blazedemo')
    const referenceMonth = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH', 'blazedemo')
    const referenceYear = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR', 'blazedemo')
    const referenceNameOnCard = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD', 'blazedemo')
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                               referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                               referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_visa()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using American Express card", async({page}) => {
    const purchaseReserveFlight = new BlazeDemo_FlightPurchase(page as any)
    const referenceName = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME', 'blazedemo')
    const referenceAddress = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS', 'blazedemo')
    const referenceCity = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY', 'blazedemo')
    const referenceState = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE', 'blazedemo')
    const referenceZipCode = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE', 'blazedemo')
    const referenceCreditCardNumber = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER', 'blazedemo')
    const referenceMonth = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH', 'blazedemo')
    const referenceYear = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR', 'blazedemo')
    const referenceNameOnCard = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD', 'blazedemo')
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                                           referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                                           referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_american_express()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test("Entering the expected text format for all text fields in the United Airlines flight purchase form using Diner's Club card", async({page}) => {
    const purchaseReserveFlight = new BlazeDemo_FlightPurchase(page as any)
    const referenceName = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME', 'blazedemo')
    const referenceAddress = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ADDRESS', 'blazedemo')
    const referenceCity = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CITY', 'blazedemo')
    const referenceState = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_STATE', 'blazedemo')
    const referenceZipCode = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ZIP_CODE', 'blazedemo')
    const referenceCreditCardNumber = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_CREDIT_CARD_NUMBER', 'blazedemo')
    const referenceMonth = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_MONTH', 'blazedemo')
    const referenceYear = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_YEAR', 'blazedemo')
    const referenceNameOnCard = getEnvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_NAME_ON_CARD', 'blazedemo')
    await purchaseReserveFlight.test_reserved_flight_form(referenceName, referenceAddress, referenceCity, referenceState,
                                                                      referenceZipCode, referenceCreditCardNumber, referenceMonth,
                                                                      referenceYear, referenceNameOnCard)
    await purchaseReserveFlight.select_card_diners_club()
    await purchaseReserveFlight.checkbox()
    await purchaseReserveFlight.submitButton()
})
test.afterEach(async({page}, testInfo) => {
     const purchaseReserveFlight = new BlazeDemo_FlightPurchase(page as any)
     const status = testInfo.status ?? 'undefined'
     if (status === 'failed') {
        await logger.error(`tests/home/reserved_flight_purchase_forms/regression_test_reserved_flight_purchase_form.spec.ts: Test execution failed at step "${testInfo.title}"`)
     } else {
        await logger.info(`tests/home/reserved_flight_purchase_forms/regression_test_reserved_flight_purchase_form.spec.ts: Test completed with status ${testInfo.status?.toUpperCase()}`)
     }
     await purchaseReserveFlight.close()
})
