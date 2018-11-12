import bcrypt from 'bcryptjs';

const hashPassword = (password) => {
    if (password < 8) {
        throw new Error('password must be 8 characters or longer.')
    }

    return bcrypt.hash(password, 10);
}

export { hashPassword as default }