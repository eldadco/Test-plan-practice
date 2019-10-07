const Store = require('./Store')
let S =  new Store('https://cakes-automation-course.herokuapp.com/store.html')
async function main () 
{    
   await S.CheckCurrentDay() 
   await S.driver.sleep(5000)
    await S.Infra.close()
}

main()