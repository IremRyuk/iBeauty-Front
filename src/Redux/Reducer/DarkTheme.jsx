export const DarkTheme = (state=true,action) => {
    switch(action.type){
        case 'changeTheme':return state = action.payload
        default:return state
    }
}