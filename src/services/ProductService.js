import * as request from '~/utils/request';

export const getAllBooks = async () => {
    try {
        const res = request.get('/books');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getBooksPagAndSort = async ({ page = 0, size = 10, sort = 'id' }) => {
    try {
        const res = request.get('/books/pagination', {
            params: {
                page,
                size,
                sort,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
