var pool = require("./databaseConfig");
var userDB={
    getUserLogin:function(email,pw,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err,null);
            } else{
                console.log("connected!")
                var sql='select * from tb_user where email =? and pw=?';
                conn.query(sql,[email,pw],function(err,result){
                    if(err){
                        console.log(err);
                        return callback(err,null);
                    } else{
                        console.log(result);
                        return callback(null,result);
                    }
                });
            }
        });
    },
    //nama method dan parameter
    addUser:function(nama,email,pw,telp,alamat,callback){
        //melakukan koneksi ke database 
        //parameter pertama untuk error dan kedua untuk koneksi
        pool.getConnection(function(err,conn){
            //pengecekan koneksi ke database
            if(err){
                //menampilkan error
                console.log(err);
                return callback(err,null);
            } else{
                console.log("connected!");
                //query ke database
                var sql='insert into tb_user(nama,email,pw,telp,alamat) values (?,?,?,?,?)';
                //data yang akan di inputkan berasal dari parameter fungsi
                conn.query(sql,[nama,email,pw,telp,alamat], function(err,result){
                    conn.release();
                    //pengecekan query
                    if(err){
                        //menampilkan error
                        console.log(err);
                        return callback(err, null);
                    } else{
                        //menampilkan hasil
                        console.log(result);
                        return callback(null,result);
                    }
                });
            }
        });
    },
}
module.exports=userDB
