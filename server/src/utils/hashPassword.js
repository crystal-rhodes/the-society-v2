import bcrypt from 'bcryptjs';

const hashPassword = (password) => {
    console.log(password)
    if (password.length < 8) {
        throw new Error('password must be 8 characters or longer.')
    }

    return bcrypt.hash(password, 10);
}

export { hashPassword as default }