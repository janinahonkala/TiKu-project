import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import { CardContainer } from '../../styles/ProjectCard.styles';

const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {project.customer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {project.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estimated Time: {project.timeEstimate} hours
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Due Date: {project.dueDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {project.description}
          </Typography>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

// PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    customer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeEstimate: PropTypes.number.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
