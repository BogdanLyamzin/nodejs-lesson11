const {Post} = require("../models");
// page=3&per_page=5
const getAllQuery = ({page, per_page, ...rest})=> {
    const skip = (page - 1) * per_page;
    return Post.find(rest, "title", {
        skip,
        limit: per_page,
        sort: {
            date_added: "asc"
        }
    });
}

module.exports = {
    getAllQuery
}