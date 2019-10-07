const InfraClass = require('./SeleniumInfraStructre')
// import {
//     codes,
//     byAlpha2,
//     byAlpha3,
//     byNumeric,
// } from 'iso-country-codes';
class TestSite {
    constructor() {
        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
    }

    async login() {

        let url = "https://facebook.com/"
        await this.seleniumInfra.getURL(url)
        // seleniumInfra.Write("Computer-Science")'xpath',"//input[@value= 'Log In']"
        //await seleniumInfra.clearElementField("class","fb_logo")
        await this.seleniumInfra.write("eldadco99@walla.com", "id", "email")
        await this.seleniumInfra.write("eldad1234", "id", "pass")
        await this.seleniumInfra.clickElement("xpath", "//input[@value= 'Log In']")
        console.log(await this.seleniumInfra.isElementExists("id", "email2"))
    }


    async Collect() {
        let movies_arr = [] // Will contain  the : Movie name , year, country , and time 

        let url = "https://film.list.co.uk/listings/woody-allen/"
        await this.seleniumInfra.getURL(url)
        let movies_details = await this.seleniumInfra.findElementListBy("className", 'info')
        // console.log(movies_names[0]
        let details = [] // Will contain the an araay of objects that will represent the details under the main Details ul of each book 
        // let movies_Arr = [{ name, year, country, time }]
        // let detail = { name, year, country, time }
        for (let i in movies_details) {
            let temp = await this.seleniumInfra.findElementListBy("tagName", "li", movies_details[i])

            for (let k in temp) {

                let text = await this.seleniumInfra.getTextFromElement(null, null, temp[k])
                if (text) {

                    details.push(text) // will contain details of all Woody Allen's movies 
                    }

                    await console.table(await this.seleniumInfra.getTextFromElement(null, null, temp[k]))
                }
            }


// `To do : select the name of the movie and then append 
// the all object to an array then console.talbe it 
        }


    }



let test = new TestSite()
// test.login() // For check facebook 
test.Collect() //For work on Woody
