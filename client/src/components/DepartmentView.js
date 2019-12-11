import React from 'react';
import Axios from 'axios';

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    Axios.get(`api/departments/${this.props.match.prams.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { name } = this.state.department;
    
    return (
      <div>
        Product view
      </div>
    )
  }
}

export default DepartmentView;