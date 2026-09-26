declare const process: { env: { [key: string]: string | undefined } };
import { type Page, expect, test } from '@playwright/test'
import { BlazeDemo_Home } from '../page_objects/Home'
import logger from '../../../util/loggger';

const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout


test.beforeEach(async({page}: {page: Page}) => {
    const searchFightInformation = new BlazeDemo_Home(page as any)
    // Environment function that will access to the environment variable 
    const referenceTitle = getEnvValue('BLAZEDEMO_HOME_TITLE', 'blazedemo')
    await logger.info('tests/home/end_to_end_test/find_flights_1.spec.ts: Executing test cases for searching flight information')
    // Navigate to the website
    await searchFightInformation.gotoWebsite()
    // Verify title
    await expect(page).toHaveTitle(referenceTitle)
  
})
test("Search flight information from Paris to Buenos Aires to get a listing of available airlines", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any);
    // Environment function that will access to the environment variable 
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    // Environment function that will access to the environment variable 
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    // Select menu for departure
    await searchFlightInformation.select_departure_paris();
    // Select menu for destination
    await searchFlightInformation.select_destination_buenos_aires();
    //Clicking the submit button to go to the next page to view flight information
    await searchFlightInformation.submitButton_findFlights();
    //Verifying the flight information page
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
   
})
test("Search flight information Paris to Rome to get a listing of available airlines", async({page}) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    // Environment function that will access to the environment variable 
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    // Environment function that will access to the environment variable 
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_paris()
    await searchFlightInformation.select_destination_rome()
    // Submit button to find flights
    await searchFlightInformation.submitButton_findFlights()
    // Verify title
    await expect(page).toHaveTitle(referenceTitle)
    // Verify url endpoint
    await expect(page.url()).toContain(referenceEndpoint)
    
})
test("Search flight information from Paris to London to get a listing of available airlines", async({page})=> {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'blazedemo')
    const referenceEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    await searchFlightInformation.select_departure_paris()
    await searchFlightInformation.select_destination_london()
    await searchFlightInformation.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceTitle)
    await expect(page.url()).toContain(referenceEndpoint)
    
})
test.afterEach(async({page}, testInfo) => {
    const searchFlightInformation = new BlazeDemo_Home(page as any)
    const status = testInfo.status ?? 'unknown'
    if (status === 'failed'){
        await logger.error(`tests/home/end_to_end_test/find_flights_1.spec.ts: test failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/home/end_to_end_test/find_flights_1.spec.ts: test completed with status "${status.toUpperCase()}"`)
    }
    await searchFlightInformation.close()
})