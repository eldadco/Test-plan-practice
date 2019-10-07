
const { Builder, By, Key, until } = require('selenium-webdriver');

const path = require('chromedriver').path;

const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);



class seleniumInfra {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();

    }
    async getURL(Url) {
        await this.driver.get(Url)
        await this.driver.manage().window().maximize()
        this.driver.sleep(3000)
    }

    // write(text,LocatorType,LocatorValue) 
    // {


    // }
    async isElementExists(locatorType, locatorValue) {
        try {
            let element = await this.findEelem(locatorType, locatorValue)
            if (element) {
                return await true
            }
            else {
                throw "element is not defined "
            }
        }
        catch (error) {
            console.error(error)

            return await false
        }


    }


    async findEelem(LocatorType, LocatorValue, fromElement = this.driver) {
        try {
            let element = await fromElement.findElement(By[LocatorType](LocatorValue))
            return element
        }
        catch (error) {
            console.log(`element can not found with locatorType: ${LocatorType} and ${LocatorValue}`)
        }
    }

    async findElementListBy(locatorType, locatorValue, fromElement = this.driver) {
        try {
            let elements = await fromElement.findElements(By[locatorType](locatorValue))
            return await elements
        }
        catch (error) {
            console.error(`${error} can not find elements of locatorType: ${locatorType} and locatorValue: ${locatorValue}`)
        }
    }



    async clickElement(locatorType, locatorValue, elem, fromElement = this.driver) {
      
        let element
        try {
            if (elem) {
                this.driver.sleep(2000)
                await elem.click()
            }
            else {
                element = await this.findEelem(locatorType, locatorValue, fromElement)
               this.driver.sleep(2000)
                await element.click()
                console.log('Clicked on element with ' + locatorType + " == " + locatorValue)

            }
            await this.driver.sleep(2000)

        }
        catch (error) 
        {
            console.error('Got error while trying to click on element with ' + locatorType + " : " + locatorValue)
        }

    }
    async getTextFromElement(locatorType, locatorValue, elem, fromElement = this.driver) {
        let text
        try {
            if (elem) {
                text = await elem.getText()
                return await text
            }

            else {
                let element = await this.findEelem(locatorType, locatorValue, fromElement)
                text = await element.getText()
                return text

            }
        }

        catch (error) {
            console.error("can not get text from element " + error)


        }


    }

    async write(data, locatorType, locatorValue, element, fromElement) {
        try {
            if (element) {
                await element.sendKeys(data)

            }
            else {
                let elem = await this.findEelem(locatorType, locatorValue, fromElement)
                await elem.sendKeys(data)

            }

            console.log(`${data} written into the input`)
        }
        catch (error) {
            console.error("can not send keys")
            console.error(error)


        }
    }

    async clearElementField(locatorType, locatorValue, element, fromElement) {
        try {
            if (element) {
                await element.clear()
                return
            }
            let elem = await this.findEelem(locatorType, locatorValue, fromElement)
            if (elem) {
                await elem.clear()
                return
            }
            else {
                throw "error can not clear unexist element"
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    async close() {
        await this.driver.quit()
        console.log("The page quit")

    }


}


module.exports = seleniumInfra