import React, { useState } from "react";
import{MoreHorizontal} from "react-feather";
import "./Card.css";

function Card({card,props}){
    return(
        <div className="card">
        {/* draggable
        onDragEnd={()=>props.handleDragEnd(card.id)}
        onDragEnter={()=>props.handleDragEnter(card.id)}> */}
            <div className="card_top">
               <p className="card_top_title">
                {card.id}
                </p> 
            </div>
            <div className="card_title">
                {card.title}
            </div>
            <div className="card_footer">
                <MoreHorizontal />
                <div className="card_footer_feature">
                    {card.tag}
                </div>
            </div>
        </div>
    )
}

export default Card