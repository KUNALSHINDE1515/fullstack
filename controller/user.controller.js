
const regesterUser = async (req, res) => {
    // get data from  user
    console.log(req)
    console.log(res)
    // validate
    
    // check if user already exists
    
    // create a user in database
    
    //create a verifivation token

    //save token in database

    // send token an email to user

    //send success status to user

    const {name, email, password} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
}

export {regesterUser}