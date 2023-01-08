export const personReducer = (state, action) => {

    switch (action.type) {
        case "post":
            return [...state,action.payload]
            break;
        case "put":
            break;
        case "delete":
            break;
        case "get":
            break;
        default:
            break;
    }


}