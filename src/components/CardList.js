import React from 'react';
import Card from './Card';
// import  {robots } from './robots';

const CardList = ({robots}) => {
    // if(true){
    //     throw new Error("nooo");
    // }
    return(
        robots.map((user, i) => {
            return(
                <Card 
                key= {i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
            );
        })
    );
}




export default CardList;