let expression = ''
let primaryDisplayValue = '0'
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
    clearPrimaryDisplayValue()
    clearPrimaryDisplay()
    clearSecondaryDisplay()
  },
  clear_button: () => {
    clearPrimaryDisplay()
    clearPrimaryDisplayValue()
  },
  plus_sub_button: () => {
    invertSignalOfPrimaryDisplayValue()
  },
  percent_button: () => {
    // Aqui complica
  },
  plus_button: () => {
    insertOperation('+')
  },
  sub_button: () => {
    insertOperation('-')
  },
  multiplication_button: () => {
    insertOperation('*')
  },
  division_button: () => {
    insertOperation('/')
  },
  equal_button: () => {
    insertOperation('')
    showTotalInPrimaryDisplay(calculateExpression())
    expression = ''
  },
  dot_button: () => {
    if (
      !Array.from(primaryDisplayValue).find(e => {
        if (e == '.') return true
      })
    ) {
      fillPrimaryDisplayValue('.')
    }
  },
  zero_button: () => {
    fillPrimaryDisplayValue('0')
  },
  one_button: () => {
    fillPrimaryDisplayValue('1')
  },
  two_button: () => {
    fillPrimaryDisplayValue('2')
  },
  three_button: () => {
    fillPrimaryDisplayValue('3')
  },
  four_button: () => {
    fillPrimaryDisplayValue('4')
  },
  five_button: () => {
    fillPrimaryDisplayValue('5')
  },
  six_button: () => {
    fillPrimaryDisplayValue('6')
  },
  seven_button: () => {
    fillPrimaryDisplayValue('7')
  },
  eight_button: () => {
    fillPrimaryDisplayValue('8')
  },
  nine_button: () => {
    fillPrimaryDisplayValue('9')
  }
}

function calculateExpression() {
  return eval(expression)
}

function fillPrimaryDisplayValue(value) {
  if (primaryDisplayValue.length <= 8) {
    if (primaryDisplayValue != 0 || primaryDisplayValue != '0') {
      primaryDisplayValue += value
    } else {
      primaryDisplayValue = value
    }
  }

  showValueInPrimaryDisplay()
  /* if (primaryDisplay.innerHTML.length < 8) {
    if (primaryDisplay.innerHTML != 0 || primaryDisplay.innerHTML != '0') {
      primaryDisplay.innerHTML += value
    } else {
      primaryDisplay.innerHTML = value
    }
  } */
}

function showValueInPrimaryDisplay() {
  primaryDisplay.innerHTML = primaryDisplayValue
}

function showTotalInPrimaryDisplay(total) {
  let newTotal = String(total).split('.')
  if (newTotal[1] > 8) {
    primaryDisplay.innerHTML = total.toFixed(8)
  } else {
    primaryDisplay.innerHTML = total
  }
}

function clearPrimaryDisplay() {
  primaryDisplay.innerHTML = '0'
}

function clearPrimaryDisplayValue() {
  primaryDisplayValue = ''
}

function invertSignalOfPrimaryDisplayValue() {
  primaryDisplayValue = primaryDisplay.innerHTML * -1
  showValueInPrimaryDisplay()
  return
}

function fillSecondaryDisplay() {
  secondaryDisplay.innerHTML = expression
}

function clearSecondaryDisplay() {
  expression = ''
  secondaryDisplay.innerHTML = ''
}

function insertOperation(operation) {
  expression += primaryDisplay.innerHTML + ' ' + operation + ' '
  fillSecondaryDisplay()
  clearPrimaryDisplayValue()
}
