var pool = require('./databaseConfig');
var obatDB={
    getObatByCat:function(cat,callback){
        pool.getConnection(function(err,conn){
            if(err){
                return callback(err, null);
            } else{
                var sql = 'select * from tb_obat where kategori = ?';
                conn.query(sql,[cat],function (err,result) {
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

   

};
module.exports=obatDB