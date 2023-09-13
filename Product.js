import React, { Component } from "react";

class Product  extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
         this.state = {
            counter: 1,
            name: "navya",
         };
         }
    componentDidMount() {
    console.log("componnetDidMount")
   }
     
   render() {
        console.log("Product Renders");
        return (
            <div>
                <h1>Counter X-{this.state.counter}</h1> 

                <button onClick={() =>
                this.setState({counter: this.state.counter + 1})  // it will update the counter every time
                }> Add by 1</button>

            <h1>Name -{this.state.name}</h1> 

             {/* <img src={this.props.url} alt="" />
              <h1>{this.props.title}</h1>
              <h1>{this.props.desc}</h1>
              <h1>{this.props.name}</h1>
        <h1>{this.props.country}</h1> */}
            </div>
        );
    }

}
export default Product;