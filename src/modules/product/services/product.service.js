const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalProducts, rows: product } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalProducts / limit);

    return { totalProducts, product, totalPages, currentPage };
};

module.exports.getPagination = getPagination;
module.exports.getPagingData = getPagingData;