const fs=require('fs')

function unlink(filename){
    try {
        fs.unlink('./public/images/'+filename,function(err,res){
            if(err){
                console.log("ERROR",err)
            }
            else{
                console.log("File Deleted...")
            }
        })
    } catch (error) {
        console.log("CATCH",error.message)
    }
}

module.exports=unlink