import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';

// FormPropsTextFields component
const FormPropsTextFields = ({ addCustomer }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    addCustomer(data); // Add the customer to the list
    event.target.reset(); // Clear the form
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .MuiButton-root': { mt: 2 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField id="outlined-name-input" name="name" label="Name" type="text" />
        <TextField id="outlined-address-input" name="address" label="Address" type="text" />
        <TextField id="outlined-email-input" name="email" label="Email" type="email" autoComplete="email" />
        <TextField id="outlined-phone-input" name="phone" label="Phone" type="tel" autoComplete="tel" />
      </div>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

// PropTypes validation for FormPropsTextFields component
FormPropsTextFields.propTypes = {
  addCustomer: PropTypes.func.isRequired, // addCustomer must be a function and is required
};

// Customers component
const Customers = () => {
  const [customers, setCustomers] = useState(() => {
    // Get the customers from localStorage when the component loads
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  });

  // Function to add a new customer
  const addCustomer = (newCustomer) => {
    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);

    // Save the updated list of customers to localStorage
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  // Function to handle input changes (for editing existing customer data)
  const handleInputChange = (event, index, field) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index][field] = event.target.value;
    setCustomers(updatedCustomers);

    // Save the updated list to localStorage after editing
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  return (
    <div>
      <h1>TiKu - Customers</h1>
      <FormPropsTextFields addCustomer={addCustomer} />

      <div style={{ marginTop: '20px' }}>
        {customers.length > 0 && (
          <h2>Saved Customers</h2>
        )}
        {customers.map((customer, index) => (
          <Card key={index} sx={{ mb: 2, p: 2 }}>
            <CardContent>
              <h3>Customer Details</h3>
              <TextField
                label="Name"
                value={customer.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                value={customer.address}
                onChange={(e) => handleInputChange(e, index, 'address')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={customer.email}
                onChange={(e) => handleInputChange(e, index, 'email')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                value={customer.phone}
                onChange={(e) => handleInputChange(e, index, 'phone')}
                fullWidth
                margin="normal"
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Changes saved for this customer!')}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Customers;
