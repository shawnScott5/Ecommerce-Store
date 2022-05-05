import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Shawn Scott',
        email: 'demo@demo.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ronea Taylor',
        email: 'ronea@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]

export default users;