var pool = require('./databaseConfig');
var teknologiDB={
    getTeknologiByCat:function(cat,callback){
        pool.getConnection(function(err,conn){
            if(err){
                return callback(err, null);
            } else{
                var sql = 'select * from tb_teknologi where kategori = ?';
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
module.exports=teknologiDB