let cookie = document.cookie.split("=")
let token = cookie[1]
console.log(token)

let urll = "https://peepaywallet-v2.herokuapp.com/api/profile"

async function getUser(urll) {
    try {
        const response = await fetch(urll,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow"
        })
        const data = await response.json()
        console.log(data)
        const saldo = document.querySelector(".saldo")
        const username = document.querySelector(".username")
        saldo.innerHTML = `Saldo : Rp ${data.balance}`
        username.innerHTML = `Username Ewallet : ${data.username}`

        const buttonBuy = document.querySelector(".btn-buy")
        buttonBuy.addEventListener("click",async function(){
            let product = JSON.parse(localStorage.getItem("product"))
            let total = product.hargaBarang.split(" ")
            let harga = total[1]
            
            // Decode Token
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            jsonPayload = JSON.parse(jsonPayload);
            var email = jsonPayload.userEmail
            // console.log(jsonPayload.userEmail)
            if (confirm("Want to proceed this item ??")) {
                let jsonObject = {
                    email: email,
                    harga: parseInt(harga)
                }
                console.log(jsonObject)
                try {
                    let url = "https://peepaywallet-v2.herokuapp.com/api/pembelian"
                    const response = await fetch(url, {
                      method: "POST",
                      body: JSON.stringify(jsonObject),
                      headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                      }
                    })
                    const status = await response.status
                    console.log(status)
                    if (status == 200) {
                        const json = await response.json()
                        alert("Payment Succes")
                        localStorage.clear()
                        window.location.reload()
                        //   window.location.href="http://localhost:3000/invoice"
                    }
                    if (status == 400) {
                        alert("Not Enough Balance !")
                    }
                    else {
                      const json = await response.json()
                      alert(json.message)
                    }
                    } catch (error) {
                        console.log(error)
                    }   
            }
        })
    } catch (error) {
        console.log(error)
    }
}

getUser(urll)
