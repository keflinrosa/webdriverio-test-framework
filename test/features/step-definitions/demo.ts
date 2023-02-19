import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is open$/, async function() {
    await browser.url("https://www.google.com")
    let ele = await $('#L2AGLb')
    ele.click()
})

When(/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> SearchItem: ${searchItem}`)
    let ele = await $('[name=q]')
    await ele.setValue(searchItem)
    browser.keys('Enter')
})

Then(/^Click on the first search result$/, async function() {
    let ele = await $('<h3>')
    ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL) {
    console.log(`>> ExpectedURL: ${expectedURL}`)
    let url = await browser.getUrl()
    chai.expect(url).to.be.equal(expectedURL)
})