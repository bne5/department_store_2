import React from 'react';
import axios from 'axios';
import { Header, Segment, Button } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  removeDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      const { departments, } = this.state;
      this.setState({ departments: departments.filter(department => department.id !== id),
      })
    })
  }

  render() {
    const { name, } = this.state.department;
    
    return (
      <div>
        <Segment>
          <Header as="h1">
            { name } Department
          </Header>
        </Segment>
        <br />
        <br />
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
          <Button 
          color='red'
          onClick={() => this.removeDepartment}
          >
            Remove
          </Button>
      </div>
    )
  }
}

export default DepartmentView;