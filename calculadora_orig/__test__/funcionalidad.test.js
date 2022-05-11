const {limpiar, resetear, setVars, resolver, init} = require('../funcionalidad.js');

const id = 'resultado';
const type = 'span';
const value = '10';
const el = document.createElement('span');
el.setAttribute('id', id);
el.innerHTML = value;
document.body.appendChild(el);

var operaA = '5'
var operaB = '2'
var operador = "+"

//Add buttons to init() test//
const one = document.createElement('button');
one.setAttribute('id', 'uno');
one.innerHTML = '1';
document.body.appendChild(one);

const two = document.createElement('button');
two.setAttribute('id', 'dos');
two.innerHTML = '2';
document.body.appendChild(two);

const three = document.createElement('button');
three.setAttribute('id', 'tres');
three.innerHTML = '3';
document.body.appendChild(three);

const four = document.createElement('button');
four.setAttribute('id', 'cuatro');
four.innerHTML = '4';
document.body.appendChild(four);

const five = document.createElement('button');
five.setAttribute('id', 'cinco');
five.innerHTML = '5';
document.body.appendChild(five);

const six = document.createElement('button');
six.setAttribute('id', 'seis');
six.innerHTML = '6';
document.body.appendChild(six);

const seven = document.createElement('button');
seven.setAttribute('id', 'siete');
seven.innerHTML = '7';
document.body.appendChild(seven);

const eight = document.createElement('button');
eight.setAttribute('id', 'ocho');
eight.innerHTML = '8';
document.body.appendChild(eight);

const nine = document.createElement('button');
nine.setAttribute('id', 'nueve');
nine.innerHTML = '9';
document.body.appendChild(nine);

const cero = document.createElement('button');
cero.setAttribute('id', 'cero');
cero.innerHTML = '0';
document.body.appendChild(cero);

//Operaciones-------------------------->//

const reset = document.createElement('button');
reset.setAttribute('id', 'reset');
reset.innerHTML = 'C';
document.body.appendChild(reset);

const sum = document.createElement('button');
sum.setAttribute('id', 'suma');
sum.innerHTML = '+';
document.body.appendChild(sum);

const minus = document.createElement('button');
minus.setAttribute('id', 'menos');
minus.innerHTML = '-';
document.body.appendChild(minus);

const multiply = document.createElement('button');
multiply.setAttribute('id', 'multiplicacion');
multiply.innerHTML = '*';
document.body.appendChild(multiply);

const division = document.createElement('button');
division.setAttribute('id', 'division');
division.innerHTML = '/';
document.body.appendChild(division);

const equal= document.createElement('button');
equal.setAttribute('id', 'igual');
equal.innerHTML = '=';
document.body.appendChild(equal);

//Validaciones--------------------------//
describe('Validar función limpiar', () => {
    test('Limpiar', () => { 
        const validaElement = document.getElementById(id);
        expect(validaElement).toBeDefined();
        expect(validaElement.innerHTML).toBe('10');
        limpiar();
        expect(validaElement.innerHTML).toBe('');
        validaElement.innerHTML = value;    
    })
})

describe('Validar función Resetear', () => {
    test('Resetear', () => {
        const ret = setVars(operaA, operaB, operador)
        const validaElement2 = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('10');
        expect(ret[0]).toBe('5');
        expect(ret[1]).toBe('2');
        expect(ret[2]).toBe('+');
        resetear();
        const ret2 = setVars();
        expect(validaElement2.innerHTML).toBe('');
        expect(ret2[0]).toBe(0);
        expect(ret2[1]).toBe(0);
        expect(ret2[2]).toBe('');
        validaElement2.innerHTML = value;
    })
})

describe('Validar función Resolver', () => {
    test('Resolver suma', () => {
        operaA = '5'
        operaB = '2'
        operador = "+"
        const ret = setVars(operaA, operaB, operador)
        const validaElement2 = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('10');
        expect(ret[0]).toBe('5');
        expect(ret[1]).toBe('2');
        expect(ret[2]).toBe('+');
        resolver();
        const ret2 = setVars();
        expect(validaElement2.innerHTML).toBe('7');
        expect(ret2[0]).toBe(0);
        expect(ret2[1]).toBe(0);
        expect(ret2[2]).toBe('');
        validaElement2.innerHTML = value;
    })

    test('Resolver resta', () => {
        operaA = '5'
        operaB = '2'
        operador = "-"
        const ret = setVars(operaA, operaB, operador)
        const validaElement2 = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('10');
        expect(ret[0]).toBe('5');
        expect(ret[1]).toBe('2');
        expect(ret[2]).toBe('-');
        resolver();
        const ret2 = setVars();
        expect(validaElement2.innerHTML).toBe('3');
        expect(ret2[0]).toBe(0);
        expect(ret2[1]).toBe(0);
        expect(ret2[2]).toBe('');
        validaElement2.innerHTML = value;
    })

    test('Resolver multiplicación', () => {
        operaA = '5'
        operaB = '3'
        operador = "*"
        const ret = setVars(operaA, operaB, operador)
        const validaElement2 = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('10');
        expect(ret[0]).toBe('5');
        expect(ret[1]).toBe('3');
        expect(ret[2]).toBe('*');
        resolver();
        const ret2 = setVars();
        expect(validaElement2.innerHTML).toBe('15');
        expect(ret2[0]).toBe(0);
        expect(ret2[1]).toBe(0);
        expect(ret2[2]).toBe('');
        validaElement2.innerHTML = value;
    })

    test('Resolver división', () => {
        operaA = '9'
        operaB = '3'
        operador = "/"
        const ret = setVars(operaA, operaB, operador)
        const validaElement2 = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('10');
        expect(ret[0]).toBe('9');
        expect(ret[1]).toBe('3');
        expect(ret[2]).toBe('/');
        resolver();
        const ret2 = setVars();
        expect(validaElement2.innerHTML).toBe('3');
        expect(ret2[0]).toBe(0);
        expect(ret2[1]).toBe(0);
        expect(ret2[2]).toBe('');
        validaElement2.innerHTML = value;
    })
})

describe('Validar función Init', () => {
    test('Press button 1', () => {
        const validaElement1 = document.getElementById('uno');
        const validateResult = document.getElementById(id);
        expect(validaElement1).toBeDefined();
        expect(validaElement1.innerHTML).toBe('1');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement1.onclick();
        expect(validateResult.innerHTML).toBe('1');
        validateResult.innerHTML = value;
    });

    test('Press button 2', () => {
        const validaElement2 = document.getElementById('dos');
        const validateResult = document.getElementById(id);
        expect(validaElement2).toBeDefined();
        expect(validaElement2.innerHTML).toBe('2');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement2.onclick();
        expect(validateResult.innerHTML).toBe('2');
        validateResult.innerHTML = value;
    });

    test('Press button 3', () => {
        const validaElement3 = document.getElementById('tres');
        const validateResult = document.getElementById(id);
        expect(validaElement3).toBeDefined();
        expect(validaElement3.innerHTML).toBe('3');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement3.onclick();
        expect(validateResult.innerHTML).toBe('3');
        validateResult.innerHTML = value;
    });

    test('Press button 4', () => {
        const validaElement4 = document.getElementById('cuatro');
        const validateResult = document.getElementById(id);
        expect(validaElement4).toBeDefined();
        expect(validaElement4.innerHTML).toBe('4');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement4.onclick();
        expect(validateResult.innerHTML).toBe('4');
        validateResult.innerHTML = value;
    });

    test('Press button 5', () => {
        const validaElement5 = document.getElementById('cinco');
        const validateResult = document.getElementById(id);
        expect(validaElement5).toBeDefined();
        expect(validaElement5.innerHTML).toBe('5');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement5.onclick();
        expect(validateResult.innerHTML).toBe('5');
        validateResult.innerHTML = value;
    });

    test('Press button 6', () => {
        const validaElement6 = document.getElementById('seis');
        const validateResult = document.getElementById(id);
        expect(validaElement6).toBeDefined();
        expect(validaElement6.innerHTML).toBe('6');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement6.onclick();
        expect(validateResult.innerHTML).toBe('6');
        validateResult.innerHTML = value;
    });

    test('Press button 7', () => {
        const validaElement7 = document.getElementById('siete');
        const validateResult = document.getElementById(id);
        expect(validaElement7).toBeDefined();
        expect(validaElement7.innerHTML).toBe('7');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement7.onclick();
        expect(validateResult.innerHTML).toBe('7');
        validateResult.innerHTML = value;
    });

    test('Press button 8', () => {
        const validaElement8 = document.getElementById('ocho');
        const validateResult = document.getElementById(id);
        expect(validaElement8).toBeDefined();
        expect(validaElement8.innerHTML).toBe('8');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement8.onclick();
        expect(validateResult.innerHTML).toBe('8');
        validateResult.innerHTML = value;
    });

    test('Press button 9', () => {
        const validaElement9 = document.getElementById('nueve');
        const validateResult = document.getElementById(id);
        expect(validaElement9).toBeDefined();
        expect(validaElement9.innerHTML).toBe('9');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement9.onclick();
        expect(validateResult.innerHTML).toBe('9');
        validateResult.innerHTML = value;
    });

    test('Press button 0', () => {
        const validaElement0 = document.getElementById('cero');
        const validateResult = document.getElementById(id);
        expect(validaElement0).toBeDefined();
        expect(validaElement0.innerHTML).toBe('0');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement0.onclick();
        expect(validateResult.innerHTML).toBe('0');
        validateResult.innerHTML = value;
    });

    test('Press button +', () => {
        const validaElement10 = document.getElementById('suma');
        const validateResult = document.getElementById(id);
        expect(validaElement10).toBeDefined();
        expect(validaElement10.innerHTML).toBe('+');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement10.onclick();
        const ret = setVars()
        expect(validateResult.innerHTML).toBe('');
        expect(ret[2]).toBe('+');
        validateResult.innerHTML = value;
    });

    test('Press button -', () => {
        const validaElement11 = document.getElementById('resta');
        const validateResult = document.getElementById(id);
        expect(validaElement11).toBeDefined();
        expect(validaElement11.innerHTML).toBe('-');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement11.onclick();
        const ret = setVars()
        expect(validateResult.innerHTML).toBe('');
        expect(ret[2]).toBe('-');
        validateResult.innerHTML = value;
    });

    test('Press button *', () => {
        const validaElement12 = document.getElementById('multiplicacion');
        const validateResult = document.getElementById(id);
        expect(validaElement12).toBeDefined();
        expect(validaElement12.innerHTML).toBe('*');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement12.onclick();
        const ret = setVars()
        expect(validateResult.innerHTML).toBe('');
        expect(ret[2]).toBe('*');
        validateResult.innerHTML = value;
    });

    test('Press button /', () => {
        const validaElement13 = document.getElementById('division');
        const validateResult = document.getElementById(id);
        expect(validaElement13).toBeDefined();
        expect(validaElement13.innerHTML).toBe('/');
        expect(validateResult.innerHTML).toBe('10');
        limpiar();
        init();
        validaElement13.onclick();
        const ret = setVars()
        expect(validateResult.innerHTML).toBe('');
        expect(ret[2]).toBe('/');
        validateResult.innerHTML = value;
    });
})