export const Search  = (state='',action) => {
    switch (action.type) {
        case 'search': return state = action.payload    
        default:return state
    }
}