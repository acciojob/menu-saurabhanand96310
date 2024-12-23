import React from "react"



const Disheslist=({dishes})=>{
    return (
        <div className="dishes-list">
            {dishes.map(dish=>{
                return <div className="dish-card">
                    <img src={dish.img}></img>
                    <div>
                        <div>
                            <b>{dish.title}</b>
                            <span>{dish.price}</span>
                         </div>   
                         <p>{dish.desc}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
export default Disheslist;