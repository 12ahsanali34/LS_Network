
export default function FirstReducer (state = '', action){
    switch(action.type){
        case 'changeFirstUser':
            return action.payload
            case 'changeSecUser':
                return 'SecondUser'
            case 'changeThirdUser':
                return 'ThirUser'
            default:
                return state;
    }
}