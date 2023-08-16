module.exports = {
    //get all user
    index (req,res){
        res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
    },
    //creat user
    creat (req,res){
        res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
    },
    //edit user
    put(req,res){
        res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId + " : " + JSON.stringify(req.body.name))
    },
    //delete user
    delete(req,res){
        res.send('ทำการลบผู้ใช้งาน' + req.params.userId + ' : ' + JSON.stringify(req.body.name))
    },
    //show user by id
    show(req,res){
        res.send('ดูข้อมูลผู้ใช้'+ req.params.userId + ' : ' + JSON.stringify(req.body))
    }
}