const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = require('../models/userSchema');

const addUser = async(req, res)=> {
    try {
        const {name, email, password} = req.body;
        if(!name){
            return res.status(400).json({
                message: "Please enter name"
            })
        }
        if(!email){
            return res.status(400).json({
                message: "Please enter email"
            })
        }
        if(!password){
            return res.status(400).json({
                message: "Please enter password"
            })
        }

        const userData = await userSchema.findOne({email});

        if(userData){
            return res.status(409).json({
                status : "Success",
                message: "User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userSchema.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            status: "Success",
            message: "User Created Successfully"
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}


// const userLogin = async(req, res)=>{
//     try {
//         let {email, password} = req.body;
//         if(!email){
//             return res.status(400).json({
//                 message: "Please enter email"
//             })
//         }
//         if(!password){
//             return res.status(400).json({
//                 message: "Please enter password"
//             })
//         }

//         let userData = await userSchema.findOne({email : email, password: password});

//         if(userData){
//             return res.status(200).json({
//                 status: "Success",
//                 message: "Get user data successfully"
//             });
//         }else{
//             return res.status(400).json({
//                 message: "Not found user data"
//             })
//         }

//     } catch (error) {
//         return res.status(400).json({
//             status: "error",
//             message: error.message
//         })
//     }
// }

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Please enter email"
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "Please enter password"
            });
        }

       const userData = await userSchema.findOne({ email });
       const isMatch = await bcrypt.compare(
            password,
            userData.password
        );

       if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: userData._id,
                email: userData.email
            },
            process.env.USER_SECRET_KEY,
            {
                expiresIn: "7d"
            }
        );

        console.log("Token JWT", token);

        return res.status(200).json({
            status: "Success",
            message: "Login Successful",
            token
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        });
    }
};

module.exports = {
    addUser,
    userLogin
};