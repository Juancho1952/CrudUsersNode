const usersDB = []
let id = 1

const findAllUsers = () => {
    return usersDB
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'Birthday Unknown'
    }
    usersDB.push(newUser)
    return newUser
}

const findUserById = (id) => {
    const filteredId = usersDB.find(item => item.id == id)
    return filteredId
}


module.exports = {
    findAllUsers,
    createNewUser,
    findUserById
}