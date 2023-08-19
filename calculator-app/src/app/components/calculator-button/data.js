const buttonKey1 = [
    // row 1
    {
        id: 'seven',
        number: 7,
        active : false,
        show: true
    },
    {
        id: 'eight',
        number: 8,
        active : false,
        show: true
    },
    {
        id: 'nine',
        number: 9,
        active : false,
        show: true
    },
    {
        id: 'delete',
        value: 'DEL',
        active : false,
        show: false
    },

    // row2
    {
        id: 'four',
        number: 4,
        active : false,
        show: true
    },
    {
        id: 'five',
        number: 5,
        active : false,
        show: true
    },
    {
        id: 'six',
        number: 6,
        active : false,
        show: true
    },
    {
        id: 'add',
        value: '+',
        operator: '+',
        active : false,
        show: true
    },

    // row3
    {
        id: 'one',
        number: 1,
        active : false,
        show: true
    },
    {
        id: 'two',
        number: 2,
        active : false,
        show: true
    },
    {
        id: 'three',
        number: 3,
        active : false,
        show: true
    },
    {
        id: 'subtract',
        value: '-',       
        operator: '-',
        active : false,
        show: true
    },

    // row4
    {
        id: 'decimal',
        number: '.',
        active : false,
        show: true
    
    },
    {
        id: 'zero',
        number : '0',
        active : false,
        show: true
    },
    {
        id: 'divide',
        value: '/',
        operator: '/',
        active : false,
        show: true
    },
    {
        id: 'multiply',
        value: 'x',       
        operator: '*',
        active : false,
        show: true
    },
]

const buttonKey2 = [
    {
        id: 'clear',
        value: 'RESET',
        active : false,
        show: false
    },
    {
        id: 'equals',
        value: '=',
        active : false,
        show: false
    }
]
export { buttonKey1, buttonKey2 }