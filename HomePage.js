const InfraClass = require('./SeleniumInfraStructre')
const waitUntil = require('async-wait-until');

class HomePage {

    constructor(url) {

        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
         this.seleniumInfra.getURL(url)

    }

    // async Get_Url(url) {

    //     await this.seleniumInfra.getURL(url)

    // }

    async search(input) {
        if (input) {
            try {

                await this.seleniumInfra.write(input, 'id', 'inputSearch')
                await this.seleniumInfra.clickElement('id', 'inputSearchSubmitImage')
                let str
                await this.driver.sleep(4000)
                str = await this.driver.getCurrentUrl()
                console.log(str)
                if (input.toLowerCase() == "home") {
                    input = "index"
                }
                input = input.toLowerCase()
                if (str ==`https://cakes-automation-course.herokuapp.com/ ${input}.html`) {
                    console.log(" The page that was searched has opened ")

                }

                else {
                    console.error(" The page that was searched hasn't opened ")

                }
            }
            catch (error) {
                await this.seleniumInfra.clearElementField('id', 'inputSearch')
                console.error("The input is not valid ,the options are: HOME,ABOUT,PRODUCTS,CONTACT,STORE")

            }
        }

        else {

            console.log("you have to insert value to the input ")
        }

    }


    async advancedSearch(cakes, ratings, date, s1, s2) {

        let text = `Date of upload:${date}Web pages that have all of these words:${s1}Web pages that have this exact wording or phrase:${s2}  `
        await this.seleniumInfra.clickElement("id", "myBtn")
        //await this.seleniumInfra.clickElement("")       

        // this.seleniumInfra.clickElement("id","MyBtn")                                           
        // let element = await this.seleniumInfra.findEelem("class","modal-body")
        for(let cake of cakes )
        {
            await this.seleniumInfra.clickElement('xpath', `//input[@value=${cake}]`)
        }
        
        for(let rating of ratings)
        {
             await this.seleniumInfra.clickElement('xpath', `//input[@value=${rating}]`)
        }
        await this.seleniumInfra.write(s1, "id", "input1")
        await this.seleniumInfra.write(date, "className", "inputDate formText")
        await this.seleniumInfra.write(s2, 'id', "input2")
        await this.seleniumInfra.clickElement("id", "myBtnForm")
        let results_Array = await this.seleniumInfra.findElementListBy("className", "searchOutput")

        let str = ""
        for (let result of results_Array) {
               let temp = await this.seleniumInfra.getTextFromElement(null, null, result)
               str += temp
        
               // str +=result
        }
        console.log(str)
        console.log(text)
        if (text == str) {
            console.log("The output is good")
            return
        }
        console.log("The output in not affair to the input")
        // results_Array[0].replace("Date of upload:","")
        // results_Array[1].replace("Web pages that have all of these words:","")
        // results_Array[2].replace("Web pages that have this exact wording or phrase:","")
        // console.log(results_Array)`
        // console.log(result)  
    }
} // ckick on buttons and pull outputs are ok !! 

//tester

module.exports = HomePage



