const bcrypt = require('bcryptjs')

const hassPassword = async (password) => {
    try {

        const hassPawd = await bcrypt.hash(password, 10)

        return hassPawd

    } catch (error) {
        console.log(error);
    }
}

const comparePassword = async (password, hassPassword) => {

    return await bcrypt.compare(password, hassPassword)

}

module.exports = { hassPassword, comparePassword }