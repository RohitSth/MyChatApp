export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    }catch{

    }
};

export const login = (req, res) => {
    res.send("Login User");
};

export const logout = (req, res) => {
    res.send("Logout User");
};