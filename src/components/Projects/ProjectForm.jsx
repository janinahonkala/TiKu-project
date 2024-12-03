import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';

const ProjectsForm = ({ addProject }) => {
  const [project, setProject] = useState({
    customer: '',
    date: '',
    timeEstimate: '',
    dueDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project); // Call the addProject function passed as a prop
    setProject({
      customer: '',
      date: '',
      timeEstimate: '',
      dueDate: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Customer"
        name="customer"
        value={project.customer}
        onChange={handleChange}
        required
      />
      <TextField
        label="Date"
        name="date"
        value={project.date}
        onChange={handleChange}
        required
      />
      <TextField
        label="Estimated Time (hours)"
        name="timeEstimate"
        type="number"
        value={project.timeEstimate}
        onChange={handleChange}
        required
      />
      <TextField
        label="Due Date"
        name="dueDate"
        value={project.dueDate}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">Add Project</Button>
    </form>
  );
};

// PropTypes validation
ProjectsForm.propTypes = {
  addProject: PropTypes.func.isRequired, // Validate addProject as a function
};

export default ProjectsForm;

