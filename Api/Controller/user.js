const bcrypt =require("bcryptjs")
const User =require("../Models/User");

exports.updateUser=async (req,res,next)=>{
    
    try {
        if(req.body.password){
            const salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        
    } catch (error) {
        
    }
}

exports.getUserById=async(req,res,next)=>{
  console.log("hi Im there")
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user._doc);
  } catch (err) {
    next(err);
  }
}

exports.getAllUser=async(res,req,next)=>{
 
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  
}
exports.deleteUser=async(req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.StateUser=async(req,res,next)=>{
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}