// Promise dengan kondisi Resolve (true)

const myFunction = () => {
  return new Promise((resolve, reject) => {
    resolve("Hello, ini kondisi true/berhasil")
  } )
}

myFunction()
.then((result) => {
  console.log(result)
})

// Promise dengan kondisi Reject (false)

const myFunction = () => {
  return new Promise((resolve, reject) => {
    reject("Hello, ini kondisi true/berhasil")
  } )
}

myFunction()
.catch((error) => {
  console.log(error)
})

// Promise async dan await

async function myFunction (id) {
  let response = await fetch(endpoint + id)
  response = await response.json()
  console.log(response)
}

// if else

const myFunction = () => {
  return new Promise((resolve, reject) => {
    if(param === 2){
      resolve("Hello, ini kondisi true/berhasil")
    }
    else{
      reject("Hello, ini kondisi true/berhasil")
    }
  })
}

myFunction()
.then((result) => {
  console.log(result)
})
.catch((error) => {
  console.log(error)
})