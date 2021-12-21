export const addValueToViewModel = (product)=>{
    return {
        type: "OPEN_VIEW_MODEL",
        payload:product,
    }
}