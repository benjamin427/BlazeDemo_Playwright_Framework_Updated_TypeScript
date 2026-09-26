import {type Page, expect, test} from '@playwright/test'
import { BlazeDemo_Home } from '../page_objects/Home'
import { BlazeDemo_ReserveServices } from '../page_objects/reserve_flights_departure_boston'
import logger from '../../../util/loggger'
declare const process: {env: {[key: string]: string | undefined}}
const getEnvValue = (key: string, fallout: string): string => process.env[key] ?? fallout

test.beforeEach(async ({page}: {page: Page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const referenceTitle = getEnvValue('BLAZEDEMO_HOME_TITLE', 'BlazeDemo')
    await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_3.spec.ts: Test execution to verify the total cost of a flight`)
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Verify the total cost of a flight from Boston to Buenos Aires from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_LUFTHANSA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT', 'blazedemo')

    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Boston to London from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_LUFTHANSA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Boston to Berlin from Lufthansa Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getEnvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getEnvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getEnvValue('BLAZEDEMO_PURCHASE_LUFTTHANSA_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getEnvValue('BLAZEDEMO_PURCHASE_LUFTHANSA_ENDPOINT', 'blazedemo')

    await verifyFlightServices.select_departure_boston()
    await verifyFlightServices.select_destination_berlin()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_4346_Lufthansa()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test.afterEach(async({page}, testInfo) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const status = testInfo.status ?? 'undefined'
    if (status === 'failed'){
        await logger.error(`tests/home/end_to_end_test/verify_flight_purchase_3.spec.ts: Test execution failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_3.spec.ts: Test completed with status ${testInfo.status?.toUpperCase()}`)
    }
    await verifyFlightServices.close()
})