const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = [{ email: 'admin@example.com', password: bcrypt.hashSync('password', 10) }]; // Dummy user

exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    res.json({ token });
};

exports.validateToken = (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, decoded });
    } catch (err) {
        res.status(401).json({ valid: false, message: 'Invalid token' });
    }
};