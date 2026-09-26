declare const process: {env: {[key: string]: string | undefined}}
import {expect, test} from '@playwright/test'
import {BlazeDemo_Home} from '../page_objects/Home'
import logger from '../../../util/loggger'

const getEnvValue = (key: string, fallback: string): string => process.env[key] ?? fallback

test.beforeEach(async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_HOME_TITLE', 'blazedemo')
    await logger.info('tests/home/end_to_end_test/find_flights_2.spec.ts: Executing test cases for searching flight information')
    await searchFlightInformation.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Search flight information for Philadelphia to Buenos Aires", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_buenos_aires()
    await searchFlightInformation.submitButton_findFlights()
    //Verifying the flight information page
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)

})
test("Search flight information for Philadelphia to Rome", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_rome()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    

})
test("Search flight information for Philadelphia to London", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_london()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)

})
test("Search flight information for Philadelphia to Berlin", async({page}) => {
    const searchFightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFightInformation.select_departure_philadelphia()
    await searchFightInformation.select_destination_berlin()
    await searchFightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)

})
test("Search flight information for Philadelphia to New York", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_philadelphia()
    await searchFlightInformation.select_destination_new_york()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)

})
test.afterEach(async({page}, testInfo) => {
    const status = testInfo.status ?? 'unknown'
    if (status === 'failed'){
        await logger.error(`tests/home/end_to_end_test/find_flights_1.spec.ts: test failed at step: "${testInfo.title}"`)
    } else {
        await logger.info(`tests/home/end_to_end_test/find_flights_1.spec.ts: test completed with status: ${testInfo.status?.toUpperCase()} `)
    }
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    await searchFlightInformation.close()
})