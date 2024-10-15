import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// user registration
export const register = async (req,res) => {
    try{

        // Check if user with same email or username already exists
        const existingUser  = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });

        if (existingUser ) {
        return res.status(400).json({
            success: false,
            message: "User  with same email or username already exists. Please try again!"
        });
        }

        // hasing password
        const salt = bcrypt.genSaltSync(10)
        const hash =bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })

        await newUser.save()

        res.status(200).json({
            success:true,
            message:"Successfully user created"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failed to create user.Please try again!"
        })
    }
}

// user login
export const login = async (req,res) => {

    const email = req.body.email
    try{

        const user = await User.findOne({email})

        // if user don't exist
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found.Please create your account"
            })
        }

        // if user is exist then check the password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        // if password is incorrect
        if(!checkCorrectPassword){
            return res.status(404).json({
                success:false,
                message:"password is incorrect"
            })
        }
        const {password,role, ...rest} = user._doc

        // create jwt token
        const token = jwt.sign(
            {id:user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"1h"}
        )
        // set token in the browser cookies and send the responce to the client
        res.cookie("accessToken",token,{
            httpOnly: true,
            expires:token.expiresIn
        })
        .status(200).json({
            // success:true,
            // message:"successfully login",
            token,
            data: {...rest},
            role
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failed to login"
        })
    }
}