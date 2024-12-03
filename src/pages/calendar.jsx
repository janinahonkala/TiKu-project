import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Calendar = () => {
  return (
    <CalendarWrapper>
      <h1>TiKu - Calendar</h1>
      <p>Calendar functionality will go here!</p>
    </CalendarWrapper>
  );
};

export default Calendar;
