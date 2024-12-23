import React from "react";

const Filters=({categoriesList, selectedCategory, setCategory})=>{
return (
    <div className="categories-list">
    {
        categoriesList.map((category,i)=>{
            return(
                <div className="category">
                   <input 
                   id={`filter-btn-${i+1}`} 
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