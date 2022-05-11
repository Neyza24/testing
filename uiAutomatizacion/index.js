const {By, Builder, Capabilities} = require('selenium-webdriver');
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert');

async function TC_001() {
    //Steeamos las características del navegador:
    chromeCapabilities.set('chromeOptions', {args:['--headless']});

    //definimos un driver quein nos va permitir accionar dentro de chrome
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
    
    //Vamos a empezar a manipular el driver creado
    /* await driver.Chrome(resource_path("C:\\DHC1FT\Bimestre 2\\Testing\\uiAutomatizacion\\chromedriver.exe")); */
    await driver.get('https://www.facebook.com/');
    await driver.manage().window().maximize();

    await driver.sleep(10000);

    
    await driver.findElement(By.id('email')).sendKeys('dhmaria83@gmail.com');
    await driver.findElement(By.id('pass')).sendKeys('maria12345');
    await driver.findElement(By.xpath("//button[@type='submit']")).click();

    await driver.sleep(2000);

    //Comparar el resultado actual con el esperado, validamos a partir d elementos
    let buttonTextCompare = await driver.findElement(By.id('checkpointSubmitButton')).getAttribute('value');
    assert.strictEqual(buttonTextCompare, 'Continuar');
    console.log('Login Successfully');

    await driver.sleep(10000);
    await driver.quit();

}

//Llamada al método

TC_001();


//Ejecutamos el caso de prueba con el comando node test.js en la terminal, si todo esta bien debería abrirse el navegador 