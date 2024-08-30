const Category = ( {api} ) => {
    return (
        <div>
            {api.map(( data ) => {
                return(
                    <p>{data}</p>
                )
            })}
        </div>
    )
}
export default Category