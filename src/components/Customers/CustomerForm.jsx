import PropTypes from 'prop-types';
import { Box, TextField, Button } from '@mui/material';
import { FormContainer } from '../../styles/CustomerForm.styles';

const CustomerForm = ({ addCustomer }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newCustomer = {
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    addCustomer(newCustomer); // Pass the new customer back to the parent
    event.target.reset(); // Clear the form
  };

  return (
    <FormContainer>
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
          <TextField id="name-input" name="name" label="Name" type="text" required />
          <TextField id="address-input" name="address" label="Address" type="text" required />
          <TextField id="email-input" name="email" label="Email" type="email" required />
          <TextField id="phone-input" name="phone" label="Phone" type="tel" required />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </FormContainer>
  );
};

// PropTypes validation
CustomerForm.propTypes = {
  addCustomer: PropTypes.func.isRequired, // Ensures addCustomer is a required function
};

export default CustomerForm;
