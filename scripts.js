let sequence = ''
let total = ''
const buttons = document.querySelectorAll('button')
const sequenceField = document.querySelector('.sequence')
const totalField = document.querySelector('.total')

function addToSequence(value) {
  sequence += value
  sequenceField.innerHTML = sequence
}

function addToTotal(value) {
  total += value
  totalField.innerHTML = total
}

function calculateSequence(sequence) {
  total = eval(sequence)
  totalField.innerHTML = total
  total = ''
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    pressedButtons[button.getAttribute('id')]()
  })
})

const pressedButtons = {
  ac_button: () => {
    console.log('AC')
    sequence = ''
    total = ''
    sequenceField.innerHTML = sequence
    totalField.innerHTML = total
  },
  plus_sub_button: () => {
    console.log('+ / -')
  },
  percent_button: () => {
    console.log('%')
  },
  division_button: () => {
    console.log('/')
    addToSequence(`${total} / `)
    total = ''
  },
  multiplication_button: () => {
    console.log('x')
    addToSequence(`${total} * `)
    total = ''
  },
  sub_button: () => {
    console.log('-')
    addToSequence(`${total} - `)
    total = ''
  },
  plus_button: () => {
    console.log('+')
    addToSequence(`${total} + `)
    total = ''
  },
  clear_button: () => {
    console.log('Clear')
  },
  dot_button: () => {
    console.log('.')
  },
  equal_button: () => {
    console.log('=')
    addToSequence(total)
    calculateSequence(sequence)
  },
  zero_button: () => {
    console.log('0')
    addToTotal('0')
  },
  one_button: () => {
    console.log('1')
    addToTotal('1')
  },
  two_button: () => {
    console.log('2')
    addToTotal('2')
  },
  three_button: () => {
    console.log('3')
    addToTotal('3')
  },
  four_button: () => {
    console.log('4')
    addToTotal('4')
  },
  five_button: () => {
    console.log('5')
    addToTotal('5')
  },
  six_button: () => {
    console.log('6')
    addToTotal('6')
  },
  seven_button: () => {
    console.log('7')
    addToTotal('7')
  },
  eight_button: () => {
    console.log('8')
    addToTotal('8')
  },
  nine_button: () => {
    console.log('9')
    addToTotal('9')
  }
}
