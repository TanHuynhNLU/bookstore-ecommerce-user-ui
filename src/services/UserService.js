import * as request from '~/utils/request';

export const updateUser = async ({
    id,
    fullName,
    username,
    password,
    email,
    role,
    birthday,
    gender,
    address,
    phone,
    dateRegistered,
    status,
    avatar,
}) => {
    try {
        const res = request.put(`/users/${id}`, {
            id,
            fullName,
            username,
            password,
            email,
            role,
            birthday,
            gender,
            address,
            phone,
            dateRegistered,
            status,
            avatar,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
