//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = fromJS({
    availableIngredients: [],
    selectedIngredients:  [],
    burgerPriceCent:      0,
});

export const newBurgersReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_BURGER_INGREDIENTS:

            console.log(`Reduser -> action.payload ->`, action.payload);

            const newState =  state.set(
                'availableIngredients',
                fromJS(action.payload)
            );

            return newState;
        case type.ADD_INTENT:
            return state;
        case type.REMOVE_INTENT:
            return state;
        case type.ADD_PICTURE:
            return state;
        default:
            return state;
    }
};