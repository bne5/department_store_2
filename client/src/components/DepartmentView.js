import React from 'react';
import axios from 'axios';
import Products from './Products';
import { Link, } from 'react-router-dom';
import { Header, Segment, Button } from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = { department: {}, products: [], };

  componentDidMount() {
    const { id, } = this.props.match.params;

    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })

    axios.get(`/api/departments/${id}/products`)
      .then( res => {
        this.setState({ products: res.data, });
      })

  };

  removeDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      const { departments, } = this.state;
      this.setState({ departments: departments.filter(department => department.id !== id),
      })
    })
  }

  render() {
    const { department: { name, }, products } = this.state;
    const { id, } = this.props.match.params;

    return (
      <div>
        <Segment>
          <Header as="h1">
            { name } Department
          </Header>
        </Segment>
        <br />
        <div>
          <Header as="h2">
            Products:
          </Header>
          <Button
            as={Link}
            color="green"
            to={`/departments/${id}/new-product`}
          >
            Add Product
          </Button>
        </div>
        <hr />
        <Products products={products} />
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