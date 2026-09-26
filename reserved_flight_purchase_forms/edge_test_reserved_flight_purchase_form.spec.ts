import {expect, test} from '@playwright/test'
import { BlazeDemo_FlightPurchase} from './page_objects/reserve_flight_form'
import logger from '../../util/loggger'
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test.beforeEach(async({page}) => {
    await logger.info(`tests/reserved_flight_purchase_forms/edge_test_reserved_flight_purchase_form.spec.ts: Test execution to verify unique errors`)
})

test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharacters = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharacters = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharacters = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters,
            referenceSpecialCharacters, referenceSpecialCharacters, referenceSpecialCharacters)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion2 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion2 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion2 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_2', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2,
            referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2, referenceSpecialCharactersVersion2)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion3 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_3', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion3 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_3', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion3 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPOECIAL_CHARACTERS_VERSIONH_3', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3,
            referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3, referenceSpecialCharactersVersion3)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special unique characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion4 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_4', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string version of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Club. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion4 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICAN_SPECIAL_CHARACTERS_VERSION_4', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter string version of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const  referenceSpecialCharactersVersion4 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_4', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4,
            referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4, referenceSpecialCharactersVersion4)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using Visa. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion5 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_visa()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter another string of special characters on all text fields of the purchase form for Virgin America to be submitted buy using Diner's Card. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLASZEDEMO_PURCHASSE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion5 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_diners_club()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})
test("Enter a shorter string of unique special characters on all text fields of the purchase form for Virgin America to be submitted buy using American Express. Should return an error prompt message.", async({page}) => {
    const enterPuchaseForm = new BlazeDemo_FlightPurchase(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    const referenceSpecialCharactersVersion5 = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_SPECIAL_CHARACTERS_VERSION_5', 'blazedemo')
    await enterPuchaseForm.gotoWebsiteSource()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    await enterPuchaseForm.test_reserved_flight_form(referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5,
            referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5, referenceSpecialCharactersVersion5)
    await enterPuchaseForm.select_card_american_express()
    await enterPuchaseForm.checkbox()
    await enterPuchaseForm.submitButton()
})

test.afterEach(async({page}, testInfo) => {
    const status = testInfo.status ?? 'undefined'
    if(status === 'failed'){
        await logger.error(`tests/reserved_flight_purchase_forms.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/reserved_flight_purchase_forms/edge_test_reserved_flight_purchase_form.spec.ts: Test execution complete with status ${testInfo.status?.toUpperCase()}`)
    }
})
