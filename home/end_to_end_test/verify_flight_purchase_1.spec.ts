declare const process: {env: {[key: string]: string | undefined}}
import {expect, test} from '@playwright/test'
import {BlazeDemo_Home} from '../page_objects/Home'
import {BlazeDemo_ReserveServices} from '../page_objects/reserve_flights_departure_paris'
import logger from '../../../util/loggger'

const getEnvValue = (key: string, fallback: string ): string => process.env[key] ?? fallback 
test.beforeEach(async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_HOME_TITLE', 'BlazeDemo')
    await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_1.spec.ts: Test execution on menu to select destinations and departures`)
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)

})
test("Verify the total cost of a flight from Paris to Buenos Aires from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)

    //Environment function that will access to the environment variables
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')

    //Selecting from a menu for departures 
    await verifyFlightServices.select_departure_paris()

    //Selecting from a menu for destinations
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options  
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_43_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to Rome from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')

    //Selecting from a menu for departures
    await verifyFlightServices.select_departure_paris()

    //Selecting from a menu for destinations
    await verifyFlightServices.select_destination_rome()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options  
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_43_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to London from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_paris()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()

    //Verifying the next page for flight options 
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)

    //Selecting airline service for reserved flight
    await selectFlightServices.select_flight_12_virgin_america()

    //Verifying the next page to view total cost of the flight
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Paris to Berlin from Virgin America airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazedDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_VIRGIN_AMERICA_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_paris()
    await verifyFlightServices.select_destination_berlin()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_12_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test.afterEach(async({page}, testInfo) => {
    const status = testInfo.status ?? 'unknown'
    if (status === 'failed'){
        await logger.error(`tests/home/end_to_end_test/verify_flight_purchase_1.spec.ts: Test execution failed a step: "${testInfo.title}"`)
    } else {
        await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_1.spec.ts: Test completed with status ${testInfo.status?.toUpperCase()}`)
    }
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    await verifyFlightServices.close()
})