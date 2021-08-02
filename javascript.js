//Nomor 01
let userContainer = document.getElementById("user-github")

let API = `https://api.github.com/users/harcengaming`

// ==== PROMISE
fetch(API, {method: "GET" })
.then(result => result.json())
.then(result => {
  console.log(result)

  for (let i = 0; i <= 20; i++) {
      userContainer.innerHTML += `<div id="github">
        <p>${result[i].promise}</p>
      </div>`;
    }
  })

.catch(err => {
  console.log(err)
})

// =====================================================================


//Nomor 02
// // ========= Async Await ============
// async function myAsync() {
//     let result = await perintahAsynchronous
//     console.log(result)
// }

// myAsync()


let negaraContainer = document.getElementById("list-negara")

let API2 = `https://restcountries.eu/rest/v2/all`

//======= Async Await
async function getNegara(API2) {
    let result2 = await fetch(API2, {method: "GET" });
    result2 = await result2.json()
  
    for (let i = 0; i <= 100; i++) {
      negaraContainer.innerHTML += `<div id="negara">
        <img src=${result2[i].flag} />
        <span>${result2[i].name}</span>
      </div>`;
    }
  };
  
  getNegara(API2)
  console.log(getNegara(API2));


 //selesai