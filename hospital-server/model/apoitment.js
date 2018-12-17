var pool = require('./databaseConfig');
var apoDB={

    getUserApo:function(id,status,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else{
                var sql ='select tb_dokter.id, tb_dokter.nama, tb_dokter.poli, tb_dokter.phone, tb_dokter.image, tb_apo.tanggal, tb_apo.keluhan FROM tb_dokter, tb_apo WHERE tb_dokter.id = tb_apo.idDokter and tb_apo.idUser= ? and tb_apo.status=? ';
                conn.query(sql,[id,status], function(err,result){
                    conn.release();
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else{
                        return callback(null,result);
                    }
                });
            }
        });
    },

    addApo:function(idUser,idDokter,tanggal,keluhan,status,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else{
                var sql='insert into tb_apo values (?,?,?,?,?)';
                conn.query(sql,[idUser,idDokter,tanggal,keluhan,status],function(err,result){
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

    updateApo:function(idUser,idDokter,tanggal,status,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else{
                var sql='update tb_apo set status =? where idUser=? and idDokter=? and tanggal =?';
                conn.query(sql,[status,idUser,idDokter,tanggal],function(err,result){
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
module.exports=apoDB