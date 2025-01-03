import { toast } from 'react-toastify';
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

export const register = async ({
    fullName = '',
    username = '',
    password = '',
    email = '',
    role = 'USER',
    phone = '',
}) => {
    try {
        const res = await request.post('/auth/register', {
            fullName,
            username,
            password,
            email,
            role,
            phone,
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
