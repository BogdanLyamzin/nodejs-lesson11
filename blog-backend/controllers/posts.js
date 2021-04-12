const {PostServices} = require("../services");
// page=3&per_page=5
const getAll = async (req, res, next) => {
    try {
        const results = await PostServices.getAllQuery(req.query);
        res.status(200).json({
            status: "success",
            code: 200,
            data: {
                results
            }
        });
    }
    catch(error) {
        next(error);
    }
}

module.exports = {
    getAll
}