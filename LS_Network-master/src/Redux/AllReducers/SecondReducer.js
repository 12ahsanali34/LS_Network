export default function FirstReducer (state = '', action){
    switch(action.type){
        case 'changeSecUser':
            return 'ALi'
            default:
                return state;
    }
}