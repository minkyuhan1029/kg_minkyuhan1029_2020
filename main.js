const numbers = process.argv.slice(2)
const phonetic = {
  '0' : "Zero",
  '1' : "One",
  "2" : "Two",
  "3" : "Three",
  "4" : "Four",
  "5" : "Five",
  "6" : "Six",
  "7" : "Seven",
  "8" : "Eight",
  "9" : "Nine"
}

const conversion = (inputs) => {
  for(let i = 0; i < inputs.length; i++){
    let string = ""
    for(let j = 0; j < inputs[i].length; j++){
      let digit = inputs[i][j]
      string += phonetic[digit]
    }
    inputs[i] = string
  }
  console.log(inputs.join(', '))
}

conversion(numbers)
