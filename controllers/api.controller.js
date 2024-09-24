const userModel = require('../models/UserModel')


exports.getAllEmployee = async(req, res, next) => {
    try {

        console.log("employesss.....");

        const data = await userModel.find();

        res.status(200).json({
            data : data,
            status : "success",
            message : "Records get successfully !"
        })
    } catch (error) {
        res.status(500).json({
            status : error,
            message : "Something went wrong !"
        })
        
    }
}


exports.createEmployee = async(req,res,next) => {
    try {
        const data = await new userModel(req.body).save();
        res.status(200).json({
            data : data,
            status : "success",
            message : "Record Save successfully !"
        })
    } catch (error) {
        res.status(500).json({
            status : error,
            message : "Something went wrong !"
        })
    }

}

exports.updateEmployee = async(req,res,next) => {

    const contactId = req.params.Id ;
    
    try {
    const data = await userModel.findByIdAndUpdate({_id : contactId},req.body,{new:true});
    res.status(200).json({
        status : "success",
        data : data,
        message : "Record update successfully !"
    })
  
    } catch (error) {
        res.status(500).json({
            status : "failed",
            message : "Something went wrong !"
        }) 
    }  
}

exports.deleteEmployee = async(req,res) => {
    const deleteId = req.params.Id ;
    try {
        const data = await userModel.deleteOne({_id:deleteId});

        res.status(200).json({
            data : data,
            status : "success",
            message : "Record deleted successfully !",
        })

    } catch (error) {
        res.status(500).json({
            error : error,
            status : "failed",
            message : "something went wrong"
        })
        
    }


}



