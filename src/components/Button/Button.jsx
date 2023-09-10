
export const Button = ({loadBtnClick}) => {
    return (
    <button type="button" onClick={loadBtnClick}>Load more</button>
)
}




// let page = 1

// export const Button = ({loadBtnClick}) => {
//     return (
//     <button type="button" onClick={() => loadBtnClick(page += 1)}>Load more</button>
// )
// }