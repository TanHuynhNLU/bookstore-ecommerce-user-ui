import * as request from '~/utils/request';

export const login = async (username, password) => {
    try {
        const res = await request.post('/auth/login', {
            username,
            password,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
