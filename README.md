# Simple-Rest-API
E-Commerce Website with RestAPI using NodeJS, Express, MySQL

<p align="center">
    <img src="https://img.icons8.com/color/100/00000/mysql-logo.png"/>
    <img src="https://img.icons8.com/color/100/00000/javascript--v2.png"/>
    <img src="https://img.icons8.com/color/100/00000/nodejs.png"/>
</p>

##Dokumentasi API 

### Kelompok 6
5027201049 - Muhammad Hilmi Aziz <br>
5207201050 - Muhammad Rifqi Fernanda <br>
5027201062 - Gilang Bayu Gumantara <br>

{{E-gil wallet}} = https://egilwallet.herokuapp.com/

### Dokumentasi
**Endpoint**        : GET {{E-gil wallet}} <br>
**Body Request**    : - <br>
***Authorization*** : - <br>

**Server Response** : <br>
***BERHASIL*** :
```
Documentation : https://github.com/MuhammadHilmiAzis/FP-Pemograman-Intgeratif
```

### Registrasi
**Endpoint**        : POST {{E-gill wallet}}api/profile <br>
**Body Request**    : username, email, password <br>
***Authorization*** : -  <br>
Contoh:
```
{
    "username" : "balabala",
    "email" : "bala@gmail.com",
    "password" : "123"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "message": "Register successfully !!",
    "status": 200
}
```

### Registrasi
**Endpoint**        : POST {{E-gil wallet}}api/register <br>
**Body Request**    : username, email, password <br>
***Authorization*** : - <br>
Contoh:
```
{
    "username" : "balabala",
    "email" : "bala@gmail.com",
    "password" : "123"
}
```

**Server Response** :  <br>
***BERHASIL*** : <br>
```
{
    "message": "Register successfully !!",
    "status": 200
}
```

### Login
**Endpoint**        : POST {{E-gil wallet}}api/login <br>
**Body Request**    : email, password <br>
***Authorization*** : - <br>
Contoh:
```
{
    "email" : "bala@gmail.com",
    "password" : "123"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "accesToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJiYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY1NTEyNzAxNCwiZXhwIjoxNjU1MTI3MDc0fQ.QbB3sqL0rI0g4JRMWXLFkWszJndujsq35F-_9F_dBU8",
    "status": 200
}
```

### Top Up
**Endpoint**        : PUT {{E-gil wallet}}api/topup <br>
**Body Request**    : jumlah <br>
***Authorization*** : Bearer Token  <br>
Contoh:
```
{
    "jumlah" : "10000"
}
```

**Server Response** :  <br>
***BERHASIL*** :
```
{
    "topup": 1028000
}
```

### Profile
**Endpoint**        : GET {{E-gil wallet}}api/profile <br>
**Body Request**    : - <br>
***Authorization*** : Bearer Token  <br>


**Server Response** :  <br>
***BERHASIL*** :
```
{
    "username": "balabala",
    "email": "bala@gmail.com",
    "balance": "1028000"
}
```

### Pembelian
**Endpoint**        : POST {{E-gil wallet}}api/pembelian <br>
**Body Request**    : email, harga <br>
***Authorization*** : Bearer Token  <br>
Contoh:
```
{
    "email" : "bala@gmail.com",
    "harga" : "10000"
}
```

**Server Response** :  <br>
***BERHASIL*** : 
```
{
    "message": "Payment success !",
    "status": 200
}
```
