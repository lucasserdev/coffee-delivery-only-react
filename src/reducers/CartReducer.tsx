import { CartType } from "@/types/CartType";
import { CoffeType } from "@/types/CoffeType";

type AddAction = {
    type: 'add',
    payload: {
        coffee: CoffeType,
        quantity: number
    }
}

type RemoveAction = {
    type: 'remove',
    payload: {
        id: number;
    }
}

type RemoveAllAction = {
    type: 'removeAll'
}

type IncrementAction = {
    type: 'increment',
    payload: {
        id: number
    }
}

type DecrementAction = {
    type: 'decrement',
    payload: {
        id: number
    }
}

type cartActions = AddAction | RemoveAction | RemoveAllAction | IncrementAction | DecrementAction;
export const CartReducer = (Cart: CartType[], actions: cartActions) => {
    switch(actions.type) {
        case 'add':
            return [...Cart, actions.payload];
        case 'increment':
            return Cart.map(item => {
                if(item.coffee.id === actions.payload.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            })
        case 'decrement':
            return Cart.map(item => {
                if(item.coffee.id === actions.payload.id) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item;
            }).filter(item => item.quantity > 0);
        case 'remove':
            return Cart.filter(item => item.coffee.id !== actions.payload.id);
        case 'removeAll':
            return [];
        default:
            return Cart;
    }
}