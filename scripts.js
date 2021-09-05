const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    pressedButtons[button.getAttribute('id')]()
  })
})

const pressedButtons = {
  ac_button: () => {
    console.log('AC')
  },
  plus_sub_button: () => {
    console.log('plus_sub_button')
  },
  percent_button: () => {
    console.log('percent_button')
  },
  division_button: () => {
    console.log('division_button')
  },
  multiplication_button: () => {
    console.log('multiplication_button')
  },
  sub_button: () => {
    console.log('sub_button')
  },
  plus_button: () => {
    console.log('plus_button')
  },
  clear_button: () => {
    console.log('Aclear_buttonC')
  },
  dot_button: () => {
    console.log('dot_button')
  },
  equal_button: () => {
    console.log('equal_button')
  },
  zero_button: () => {
    console.log('zero_button')
  },
  one_button: () => {
    console.log('one_button')
  },
  two_button: () => {
    console.log('two_button')
  },
  three_button: () => {
    console.log('three_button')
  },
  four_button: () => {
    console.log('four_button')
  },
  five_button: () => {
    console.log('five_button')
  },
  six_button: () => {
    console.log('six_button')
  },
  seven_button: () => {
    console.log('seven_button')
  },
  eight_button: () => {
    console.log('eight_button')
  },
  nine_button: () => {
    console.log('nine_button')
  }
}
