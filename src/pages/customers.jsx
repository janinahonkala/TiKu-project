import { useState } from 'react';
import CustomerForm from '../components/Customers/CustomerForm';
import CustomerCard from '../components/Customers/CustomerCard';

const Customers = () => {
  const [customers, setCustomers] = useState(() => {
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  });

  const addCustomer = (newCustomer) => {
    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  return (
    <div>
      <h1>TiKu - Customers</h1>
      <CustomerForm addCustomer={addCustomer} />
      {customers.length > 0 && <h2>Saved Customers</h2>}
      {customers.map((customer, index) => (
        <CustomerCard key={index} customer={customer} />
      ))}
    </div>
  );
};

export default Customers;
