//inisiasi dari class express
var express = require('express');
//inisiasi dari variabel express
var app = express();

//inisiasi dari class body-parser
var bodyParser = require('body-parser');
//inisiasi dari class path

var path = require('path');
//inisiasi dari class cros

var cors = require("cors")
//inisiasi dari variabel cors
var cor = cors();

//digunakan untuk mengconvert string kedalam bentuk url
var urlencodedParser = bodyParser.urlencoded({ extended: false});
//digunakan untuk membaca inputan data dari client
var jsonParser = bodyParser.json();
app.use(cor);
app.use(express.static(path.join(__dirname,"../public")));


//inisiasi dari class dokter.js
var dokter = require('../model/dokter.js');

app.get('/api/category/:cat/dokter',function(req, res){
    var cat = req.params.cat;
    dokter.getDokterByCat(cat,function(err, result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});


//inisiasi dari class obat.js
var obat = require('../model/obat.js');

app.get('/api/category/:cat/obat',function(req, res){
    var cat = req.params.cat;
    obat.getObatByCat(cat,function(err, result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});

//inisiasi dari class pembelian.js
var pembelian = require('../model/pembelian.js')

app.get('/api/select/:id/obat',function(req, res){
    var id = req.params.id;
    pembelian.getUserPembelian(id,function(err, result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});

app.post('/api/add/pembelian',urlencodedParser,jsonParser,function(req,res){
    var idUser = req.body.idUser;
    var idObat = req.body.idObat;
    var jumlah = req.body.jumlah;
    var tanggal = req.body.tanggal;
    pembelian.addPembelian(idUser,idObat,jumlah,tanggal, function(err,result){
        if(!err){
            res.send(result.affeedRows + ' record ditambah');
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});


//inisiasi dari class artikel.js
var artikel = require('../model/artikel.js');

app.get('/api/category/:cat/artikel',function(req, res){
    var cat = req.params.cat;
    artikel.getArtikelByCat(cat,function(err, result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});


//inisiasi dari class teknologi.js
var teknologi = require('../model/teknologi.js');

app.get('/api/category/:cat/teknologi',function(req, res){
    var cat = req.params.cat;
    teknologi.getTeknologiByCat(cat,function(err, result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});


//inisiasi dari class apoitment
var apoitment = require('../model/apoitment');

app.post('/api/add/apoitment',urlencodedParser,jsonParser,function(req,res){
    var idUser = req.body.idUser;
    var idDokter = req.body.idDokter;
    var tanggal = req.body.tanggal;
    var keluhan = req.body.keluhan;
    var status = req.body.status;
    apoitment.addApo(idUser,idDokter,tanggal,keluhan,status, function(err,result){
        if(!err){
            res.send(result.affeedRows + ' record ditambah');
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});

app.post('/api/update/status/apoitment',urlencodedParser,jsonParser,function(req,res){
    var idUser = req.body.idUser;
    var idDokter = req.body.idDokter;
    var tanggal = req.body.tanggal;
    var status = req.body.status;
    apoitment.updateApo(idUser,idDokter,tanggal,status, function(err,result){
        if(!err){
            res.send(result.affeedRows + ' record diubah');
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});

app.post('/api/select/status/apoitment',urlencodedParser,jsonParser,function(req,res){
    var idUser = req.body.idUser;
    var status = req.body.status;
    apoitment.getUserApo(idUser,status,function(err,result){
        if(!err){
            res.send(result)
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});


//inisiasi dari class user
var user = require('../model/user');

app.post('/api/add/user',urlencodedParser,jsonParser,function(req,res){
    var nama=req.body.nama;
    var email = req.body.email;
    var pw = req.body.pw;
    var telp = req.body.telp;
    var alamat = req.body.alamat;
    user.addUser(nama,email,pw,telp,alamat, function(err,result){
        if(!err){
            console.log(result);
            res.send(result.affeedRows +'record ditambahkan');
        } else{
            console.log(err);
            res.status(500).send(err,code);
        }
    });
});

app.post('/api/select/login/user',urlencodedParser,jsonParser,function(req,res){
    var email=req.body.email;
    var pw = req.body.pw;
    user.getUserLogin(email,pw,function(err,result){
        if(!err){
            res.send(result);
        } else{
            console.log(err);
            res.status(500).send(err);
        }
    });
});

module.exports = app