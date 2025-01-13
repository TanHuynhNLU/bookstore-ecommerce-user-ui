import { toast } from 'react-toastify';
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
        const res = await request.put(`/users/${id}`, {
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
export const changePassword = async ({ id, oldPassword, newPassword }) => {
    try {
        const res = await request.put(`/users/${id}/change-password`, {
            oldPassword,
            newPassword,
        });
        return res;
    } catch (error) {
        toast.error(error.response.data.message, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }
};
