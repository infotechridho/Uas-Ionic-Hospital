var pool = require('./databaseConfig');
var pembelianDB={
    getUserPembelian:function(id,callback){
        pool.getConnection(function(err,conn){
            if(err){
                return callback(err, null);
            } else{
                var sql = 'SELECT tb_obat.nama,tb_obat.harga,tb_obat.kemasan,tb_obat.image,tb_pembelian.jumlah,tb_pembelian.tanggal FROM tb_pembelian,tb_obat WHERE tb_pembelian.idObat = tb_obat.id AND tb_pembelian.idUser= ?';
                conn.query(sql,[id],function (err,result) {
                    conn.release();
                    if(err){
                        return callback(err,null);
                    } else{
                        console.log(result);
                        return callback(null,result);
                    }
                })
            }
        })
    },

    addPembelian:function(idUser,idObat,jumlah,tanggal,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else{
                console.log("connected");
                var sql='insert into tb_pembelian values (?,?,?,?)';
                conn.query(sql,[idUser,idObat,jumlah,tanggal],function(err,result){
                    conn.release();
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else{
                        console.log(result);
                        return callback(null,result);
                    }
                })
            }
        })
    },
}
module.exports=pembelianDB