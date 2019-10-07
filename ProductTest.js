const ProductPage = require('./ProductPage')
let p = new ProductPage('https://cakes-automation-course.herokuapp.com/products.html')

async function main() {
   
    // await p.pressUp(['Chocolate Cake', 'Apple Pie'], ['Vanilla Cake', 'Red Valvet Cake'])
   await p.Press_Down(['Chocolate Cake', 'Apple Pie'],['Lemon Blueberry Cake','New York Cheese Cake'])
    await p.driver.sleep(5000)
    await p.seleniumInfra.close()
}

main()