const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
    res.status(200).json(data)
}

const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if (first_name && last_name && email && password) {
        const data = usersControllers.createNewUser({ first_name, last_name, email, password, birthday })
        res.status(201).json(data)
    } else {
        res.status(404).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                password: 'string',
                birthday: 'Optional'
            }
        })
    }
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.findUserById(id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({
            message: 'Invalid Id',
        })
    }
}

module.exports = {
    getAllUsers,
    postNewUser,
    getUserById
}