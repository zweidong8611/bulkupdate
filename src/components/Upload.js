import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Listall from '../api/Listall'
import Upload2 from './Upload2'


class App extends Component {
  state = { lists: [] };
  componentDidMount = async () => {
    const term = `query { allXes  { nodes {id,groups,a2,  a7 ,a10,a12}}}`
    //    term = `query{wgryByLxfs(lxfs:"18221698859") {lxfs,dwry,  ds  }}`
    const response = await Listall.post('/graphql',
      term
    );

    console.log("=========Begin to fetch data from database========\n", response.data.data.allXes.nodes);
    this.setState({ lists: response.data.data.allXes.nodes });
  }
  componentWillUnmount = async () => {

    console.log("=========componentWillUnmount ========\n");
  }

  render() {
    /*     const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Ma333urer',
            age: 23,
          }
        }, {
          name: 'Tanner zzz',
          age: 26,
          friend: {
            name: 'Jason Ma111urer',
            age: 33,
          }
        },
        {
          name: 'Tanner www',
          age: 26,
          friend: {
            name: 'Jason M222aurer',
            age: 13,
          }
        }];
    
        const columns = [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age',
          // Cell: () => <span className='number'> 3</span> // Custom cell components!
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }] */
    const columns = [{
      Header: 'ID',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: '分组',
      accessor: 'groups',
      // Cell: () => <span className='number'> 3</span> // Custom cell components!
    }, {
      Header: '属地分公司',
      accessor: 'a2' // Custom value accessors!
    }, {
      Header: '装机地址J', // Custom header components!
      accessor: 'a10'
    }, {
      Header: '宽带密码L', // Custom header components!
      accessor: 'a12'
    }]

    return (
      <div>
        <Upload2></Upload2>
        <ReactTable
          defaultPageSize={10}
          data={this.state.lists}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
