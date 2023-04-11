const userdata = require('../models/userdata');


const read = async(req,res)=>{
    try{
        const {email} = req.params;
        console.log(email);
        const data  = await userdata.findOne({email});
        res.status(200).json(data);
    }
    catch(e){
        res.status(400).json(e);
    }
};

// const create=async(req,res)=>{
//     const {email,total_earnings,
//         total_expenses,estimated_networth,
//         targeted_networth,cashflow,stocks,
//         real_estate,gold,fd} = req.body;
//     try{
//         const user = await userdata.create(
//             {email,total_earnings,
//             total_expenses,estimated_networth,
//             targeted_networth,cashflow,stocks,
//             real_estate,gold,fd}
//             );
//         res.status(200).json({user:user._id});
//     }catch(e){
//         console.log(e);
//         res.status(400).json(e);
//     }
// };

const updateorcreate=async(req,res)=>{
    try{
        const {email} = req.params;
        const data = await userdata.findOneAndUpdate({email},req.body);
        if(!data){
            const user = await userdata.create(req.body);
            res.status(200).json({_id:user.id});
        }
        const updatedData = await userdata.findOne({email});
        res.status(200).json(updatedData);
    }
    catch(e){
        res.status(400).json(e);
    }
};

module.exports.read=read;
// module.exports.create=create;
module.exports.updateorcreate=updateorcreate;