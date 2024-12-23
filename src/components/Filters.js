import React from "react";

const Filters=({categoriesList, selectedCategory, setCategory})=>{
return (
    <div className="categories-list">
    {
        categoriesList.map((category,i)=>{
            return(
                <div data-test-id={`menu-item-${category}`}>
                   <input 
                   id={`filter-btn-${i+1}`} 
                   type="radio" 
                   name="category" 
                   checked={category==selectedCategory} 
                   value={category} 
                   onChange={(e)=>setCategory(e.target.value)}
                   />
                   <label htmlFor={`filter-btn-${i+1}`}>{category}</label>
                </div>
            )
        })
    }
    </div>
)
}

export default Filters;