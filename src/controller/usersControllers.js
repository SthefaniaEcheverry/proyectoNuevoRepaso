const registerRender = async (req, res) => {
    res.render('users/register')
};

const loginRender = async (req, res) => {
    res.render('users/login')
};

export { registerRender, loginRender };