module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({ error: 'You did not have authorized to access this page!' });
    }

    next();
};