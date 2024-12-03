import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { CardContainer } from '../../styles/CustomerCard.styles';

const CustomerCard = ({ customer, onEdit }) => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <h3>Customer Details</h3>
          <TextField
            label="Name"
            value={customer.name}
            onChange={(e) => onEdit(e, 'name')}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={customer.address}
            onChange={(e) => onEdit(e, 'address')}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={customer.email}
            onChange={(e) => onEdit(e, 'email')}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            value={customer.phone}
            onChange={(e) => onEdit(e, 'phone')}
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert('Changes saved!')}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

// PropTypes validation
CustomerCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CustomerCard;
