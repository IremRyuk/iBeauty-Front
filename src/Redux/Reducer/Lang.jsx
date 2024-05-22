export const Lang= (state='en',action) => {
    switch(action.type){
        case "spChange":return state = action.payload
        case "enChange":return state = action.payload
        default:return state
    }
}