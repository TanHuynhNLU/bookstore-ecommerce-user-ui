import * as request from '~/utils/request';

export const addNewOrder = async ({
    name,
    email = '',
    phone,
    shippingAddress,
    shippingTax = 40000,
    payment,
    avatar = '',
    note = '',
    cartItems = [],
}) => {
    try {
        const res = request.post('/orders', {
            customer: {
                name,
                email,
                phone,
                shippingAddress,
                payment,
                avatar,
            },
            note,
            shippingTax,
            orderDetailRequests: cartItems.map((cartItem) => ({ bookId: cartItem.id, quantity: cartItem.quantity })),
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
