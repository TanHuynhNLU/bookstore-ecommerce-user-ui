import * as request from '~/utils/request';

export const addContact = async ({ name, email, title = 'Người dùng liên hệ', content }) => {
    try {
        const res = await request.post('/contacts', {
            name,
            email,
            title,
            content,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
