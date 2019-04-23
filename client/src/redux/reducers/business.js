import {
    ADD_CHILD_ADDMISSION, REMOVE_ENTRY
} from '../constants/actionTypes';

const defaultState = {
    count_child_addmission: [1],
    entries: [
        {
            id: 1,
            img: 'https://source.unsplash.com/200x100'
        },
        {
            id: 2,
            img: 'https://picsum.photos/200/100?random'
        },
        {
            id: 3,
            img: 'https://picsum.photos/200/100?random'
        }
    ]
}

export default (state = defaultState, action) => {
    switch (action.type){
        case ADD_CHILD_ADDMISSION:
            return{
                ...state,
                count_child_addmission: [...state.count_child_addmission, state.count_child_addmission.length + 1]
            }
        case REMOVE_ENTRY:
            const entries = state.entries.filter(item => item.id !== action.id);
            return{
                ...state,
                entries: entries
            }
        default:
            return state;
    }
}