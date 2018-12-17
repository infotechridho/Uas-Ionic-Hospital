var pool = require('./databaseConfig');
var dokterDB={
    getDokterByCat:function(cat,callback){
        pool.getConnection(function(err,conn){
            if(err){
                console.log(err);
                return callback(err, null);
            } else{
                var sql = 'select * from tb_dokter where kategori = ?';
                conn.query(sql,[cat],function (err,result) {
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

};
module.exports=dokterDB