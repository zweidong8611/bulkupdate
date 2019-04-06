import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne } from '../../actions/countAdd'

export class Add extends Component {
  onclick1 = (e) => { // eslint-disable-line no-unused-vars
    //   console.log("onclick Once!",e);
    this.props.addOne();
  };

  render() {
    return (
      <div>
         counter{this.props.count.counter}

         {/* counter{this.props.count}
        <button onClick={this.onclick1}>+ </button>  
        <button> + </button>  
           */}
        <button onClick={this.onclick1}>+ </button>      
      </div>

    )
  }
}



const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};


export default connect(mapStateToProps, { addOne })(Add)
