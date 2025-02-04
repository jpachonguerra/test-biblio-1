// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

require('dotenv').config();

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseTest
{
	async test() {

        // login test
        //////////////////////////////////////////////////////
        await this.driver.get(process.env.direccio+"/admin/login");
       
        // 1 cercar login box

        // 2 posar usuari i password
        await this.driver.findElement(By.name("username")).sendKeys(process.env.usuari);
        await this.driver.findElement(By.name("password")).sendKeys(process.env.contrasenya);

        // 3 boto send .click()
        await this.driver.findElement(By.xpath("//input[@type='submit']")).click();

        // 4 crear llibre
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/llibre/add/']")).click();

        // 5 posar ISBN al enllaç a amb nom "Introdueix manualment l'ISBN"
        await this.driver.findElement(By.xpath("//a[text()=\"Introdueix manualment l\'ISBN\"]")).click();

        // 6 posar ISBN al prompt
        let isbnAlert = await this.driver.switchTo().alert()

        isbnAlert.sendKeys("9788492905294");
        await this.driver.sleep(1000);


        // 7 confirmar ISBN
        isbnAlert.accept();

        await this.driver.sleep(8000);


        // 8 guardar llibre
        await this.driver.findElement(By.xpath("//input[@type='submit'][@name='_save']")).click();

        // final tancar sessio
        await this.driver.findElement(By.xpath("//button[text()='Finalitzar sessió']")).click();

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();