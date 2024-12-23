import React from "react";

const Filters=({categoriesList, selectedCategory, setCategory})=>{
return (
    <div className="categories-list">
    {
        categoriesList.map(category=>{
            return(
                <div className="category">
                   <input 
                   id={category} 
                   type="radio" 
                   name="category" 
                   checked={category==selectedCategory} 
                   value={category} 
                   onChange={(e)=>setCategory(e.target.value)}
                   />
                   <label htmlFor={category}>{category}</label>
                </div>
            )
        })
    }
    </div>
)
}

export default Filters;