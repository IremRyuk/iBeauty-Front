export const DefData = (state=null,action)=>{
    switch (action.type) {
        case 'setData': return state = action.payload
        default:return state
    }
}