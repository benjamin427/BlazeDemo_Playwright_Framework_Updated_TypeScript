import {type Page, expect, test} from '@playwright/test'
import { BlazeDemo_Home } from '../page_objects/Home'
import { BlazeDemo_ReserveServices } from '../page_objects/reserve_flights_departure_piladelphia'
import logger from '../../../util/loggger'
declare const process: {env: {[key: string]: string | undefined}}
const getMvValue = (key: string, fallout: string): string => process.env[key] ?? fallout


test.beforeEach(async({page}: {page: Page}) =>{
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const referenceTitle = getMvValue('BLAZEDEMO_HOME_TITLE', 'blazedemo')
    await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_2.spec.ts: Test execution to verify total cost of a flight`)
    await verifyFlightServices.gotoWebsite()
    await expect(page).toHaveTitle(referenceTitle)
})
test("Verify the total cost of a flight from Philadelphia to Buenos Aires from United Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getMvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getMvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_buenos_aires()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Philadelphia to Rome from United Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getMvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getMvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_rome()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test("Verify the total cost of a flight from Philadelphia to London from United Airlines", async({page}) => {
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    const selectFlightServices = new BlazeDemo_ReserveServices(page as any)
    const referenceReserveTitle = getMvValue('BLAZEDEMO_RESERVE_TITLE', 'BlazeDemo')
    const referenceReserveEndpoint = getMvValue('BLAZEDEMO_RESERVE_ENDPOINT', 'blazedemo')
    const referencePurchaseTitle = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_TITLE', 'BlazeDemo Purchase')
    const referencePurchaseEndpoint = getMvValue('BLAZEDEMO_PURCHASE_UNITED_AIRLINES_ENDPOINT', 'blazedemo')
    await verifyFlightServices.select_departure_philadelphia()
    await verifyFlightServices.select_destination_london()
    await verifyFlightServices.submitButton_findFlights()
    await expect(page).toHaveTitle(referenceReserveTitle)
    await expect(page.url()).toContain(referenceReserveEndpoint)
    await selectFlightServices.select_flight_43_virgin_america()
    await expect(page).toHaveTitle(referencePurchaseTitle)
    await expect(page.url()).toContain(referencePurchaseEndpoint)
})
test.afterEach(async ({page}, testInfo) => {
    const status = testInfo.status ?? 'undefined'
    if (status === 'failed'){
        await logger.error(`tests/home/end_to_end_test/verify_flight_purchase_2.spec.ts: Test execuition failed at step "${testInfo.title}"`)
    } else {
        await logger.info(`tests/home/end_to_end_test/verify_flight_purchase_2.spec.ts: Test completed with status ${testInfo.status?.toUpperCase()}`)
    }
    const verifyFlightServices = new BlazeDemo_Home(page as any)
    await verifyFlightServices.close()
})