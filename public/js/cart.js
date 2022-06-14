const barang = document.querySelectorAll('.barang')
const namaItem = document.querySelectorAll('.namabarang')
const hargaItem = document.querySelectorAll('.harga')
const gambarItem = document.querySelectorAll('.barang img')

for (let i = 0; i < barang.length; i++) {
    barang[i].addEventListener("click",function() {
        localStorage.setItem('index',i)
        if (confirm("Want to buy this item ?")) {
            product = { 
                gambarBarang : gambarItem[i].getAttribute("src"),
                namaBarang : namaItem[i].innerHTML,
                hargaBarang : hargaItem[i].innerHTML
            }    
            localStorage.setItem('product',JSON.stringify(product))
            window.location.href='http://localhost:3000/cart'
        } 
        })    
}

