import React, { Component } from 'react'
///map method

export default class Shop extends Component {
    render(){
      this.state=[
        {item:"Washer", price: 450 },
        {item:"Dryer", price:499},
        {item:"Dishwasher", price: 650},
      ];
      return (
        <div>
          {this.state.map((userInfo) => {
            return (
              <div>
                <h1>{userInfo.item}</h1>
                <h2>{userInfo.price}</h2>
              </div>
            );
            })}
        </div>
      );
    }
  }




