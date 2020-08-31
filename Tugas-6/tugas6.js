// Tugas 1
console.log("************* Tugas 1 *************")
let luasLingkaran = (r) => {
  const luas = 3.14 * r * r
  return luas 
}

let kelilingLingkaran = (r) => {
  const keliling = 3.14 * r * 2
  return keliling
}

console.log("Luas Lingkaran : " + luasLingkaran(10))
console.log("Keliling Lingkaran : " + kelilingLingkaran(10))

// Tugas 2
console.log("************* Tugas 2 *************")

let kalimat = ""

let tambahKalimat = (kata) => {
  kalimat += `${kata} `
  return
}

tambahKalimat("saya")
tambahKalimat("adalah")
tambahKalimat("seorang")
tambahKalimat("frontend")
tambahKalimat("developer")
console.log(kalimat)

// Tugas 3
console.log("************* Tugas 3 *************")

const newFunction = literal = (firstName, lastName) => {
  return { firstName, lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName()

// Tugas 4
console.log("************* Tugas 4 *************")

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)

// Tugas 5
console.log("************* Tugas 5 *************")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]
//Driver Code
console.log(combined)