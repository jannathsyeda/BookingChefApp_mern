import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalenderSection = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 mt-4'>
                <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </div>
    );
};

export default CalenderSection;