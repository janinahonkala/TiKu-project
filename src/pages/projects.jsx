import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';

const FormPropsTextFields = ({ addProject }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    const data = {
      customer: formData.get('customer'),
      date: formData.get('date'),
      timeEstimate: formData.get('timeEstimate'),
      dueDate: formData.get('dueDate'),
      description: formData.get('description'),
    };

    console.log('Form Data:', data);
    addProject(data);  
    alert('New project added successfully!');
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-customer-input"
          label="Customer"
          name="customer"
          type="text"
        />
        <TextField
          id="outlined-date-input"
          label="Date"
          name="date"
          type="date"
          InputLabelProps={{
            shrink: true, 
          }}
        />
        <TextField
          id="outlined-time-estimate-input"
          label="Time Estimate (hours)"
          name="timeEstimate"
          type="number"
          InputProps={{
            inputProps: { min: 0 } 
          }}
        />
        <TextField
          id="outlined-due-date-input"
          label="Due Date"
          name="dueDate"
          type="date"
          InputLabelProps={{
            shrink: true, 
          }}
        />
        <TextField
          id="outlined-description-input"
          label="Description"
          name="description"
          type="text"
          multiline 
          rows={4} 
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit" 
      >
        Submit
      </Button>
    </Box>
  );
};

FormPropsTextFields.propTypes = {
  addProject: PropTypes.func.isRequired, 
};

const Projects = () => {
  // Load saved projects from localStorage or use an empty array if none exist
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const addProject = (projectData) => {
    const newProjects = [...projects, projectData];
    setProjects(newProjects);

    // Save the updated list of projects to localStorage
    localStorage.setItem('projects', JSON.stringify(newProjects));
  };

  return (
    <div>
      <h1>TiKu - Projects</h1>
      <FormPropsTextFields addProject={addProject} />
      
      <div style={{ marginTop: '20px' }}>
        {projects.length > 0 && (
          <h2>Saved Projects</h2>
        )}
        {projects.map((project, index) => (
          <Card key={index} sx={{ maxWidth: 345, marginBottom: '10px' }}>
            <CardContent>
              <div><strong>Project {index + 1}</strong></div>
              <div><strong>Customer:</strong> {project.customer}</div>
              <div><strong>Date:</strong> {project.date}</div>
              <div><strong>Time Estimate:</strong> {project.timeEstimate} hours</div>
              <div><strong>Due Date:</strong> {project.dueDate}</div>
              <div><strong>Description:</strong> {project.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
