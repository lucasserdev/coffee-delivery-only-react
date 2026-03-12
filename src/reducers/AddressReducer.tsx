import { AddressType } from "@/types/AddressType";

type AddAction = {
    type: 'add',
    payload: AddressType
}

type addressActions = AddAction;
export const AddressReducer = (Address: AddressType, actions: addressActions) => {
    switch(actions.type) {
        case 'add':
            return actions.payload
        default:
            return Address;
    }
}