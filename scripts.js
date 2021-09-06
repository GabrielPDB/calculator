const buttons = document.querySelectorAll('button')
const secondaryDisplay = document.querySelector('#secondary_display')
const primaryDisplay = document.querySelector('#primary_display')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    pressedButton[button.getAttribute('id')]()
  })
})

const pressedButton = {
  ac_button: () => {
    console.log('AC')
  },
  plus_sub_button: () => {
    console.log('+ / -')
  },
  percent_button: () => {
    console.log('%')
  },
  division_button: () => {
    console.log('/')
  },
  multiplication_button: () => {
    console.log('x')
  },
  sub_button: () => {
    console.log('-')
  },
  plus_button: () => {
    console.log('+')
  },
  clear_button: () => {
    console.log('Clear')
  },
  dot_button: () => {
    console.log('.')
  },
  equal_button: () => {
    console.log('=')
  },
  zero_button: () => {
    console.log('0')
  },
  one_button: () => {
    console.log('1')
  },
  two_button: () => {
    console.log('2')
  },
  three_button: () => {
    console.log('3')
  },
  four_button: () => {
    console.log('4')
  },
  five_button: () => {
    console.log('5')
  },
  six_button: () => {
    console.log('6')
  },
  seven_button: () => {
    console.log('7')
  },
  eight_button: () => {
    console.log('8')
  },
  nine_button: () => {
    console.log('9')
  }
}
