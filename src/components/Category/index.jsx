const Category = ({ api }) => {
  return (
    <div className=" mx-20 border mt-5 mb-5 capitalize p-1 rounded-lg">
        <h1>Category</h1>
        <hr />
        <div className="grid grid-cols-6 mt-3 text-base">
        {api.map((data)=>{
            return(
                <p>{data}</p>
            )
        })}
        </div>
        
    </div>
  );
};
export default Category;
