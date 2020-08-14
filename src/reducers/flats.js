const flats = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_LIKE':
            return state.map(flat => flat.id === action.id ? { ...flat, like: !flat.like } : flat);
        case 'SET_FLATS':
            return action.flats;
        default:
            return state
    }
};

export default flats