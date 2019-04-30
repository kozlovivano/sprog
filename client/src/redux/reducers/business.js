import {
    ADD_CHILD_ADMISSION, REMOVE_ENTRY
} from '../constants/actionTypes';

const defaultState = {
    count_child_admission: [1],
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
        case ADD_CHILD_ADMISSION:
            return{
                ...state,
                count_child_admission: [...state.count_child_admission, state.count_child_admission.length + 1]
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