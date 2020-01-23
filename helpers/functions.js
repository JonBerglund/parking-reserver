import moment from 'moment';
import { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JULY, JUNE, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER } from "../languages"
import { JAN, FEB, MAR, APR, MAY as MAY_NUM, JUN, JUL, AUG, SEP, OCT, NOV, DEC } from "./consts";

export const getMonthName = (index) => {
    switch(index) {
        case JAN: return JANUARY();
        case FEB: return FEBRUARY();
        case MAR: return MARCH();
        case APR: return APRIL();
        case MAY_NUM: return MAY();   
        case JUN: return JUNE();
        case JUL: return JULY();
        case AUG: return AUGUST();
        case SEP: return SEPTEMBER();
        case OCT: return OCTOBER();
        case NOV: return NOVEMBER();
        case DEC: return DECEMBER();
    }
}

// Returns an array with all the month days 
// (include full first week of month with prev month dates and 
// end of month include next month)
export const getMonthDaysArr = () => {
    const month = moment().month()+1;
    const firstDay = moment().startOf('month').startOf('week'); // first day of first week of the month
    const lastDay = moment().endOf('month').endOf('week'); // last day of the last week of the month
    const dateArr = [];

    // Insert all days in a month and first day of first week and 
    // last day of last week(even if not part of the month).
    for(let i = 0; firstDay.format('DD/MM/YYYY') !== lastDay.format('DD/MM/YYYY') ; i++){
        const day = firstDay.date();
        dateArr.push(getData(day, firstDay.month(), month !== firstDay.month()+1));
        firstDay.add(1,'days');
    }
    dateArr.push(getData(lastDay.date(), lastDay.month(), month === lastDay.month()));

    return(dateArr);
}

const getData = (day, month, inMonth) => {
    return { id: `${day}/${month}`, val: day, inMonth: inMonth};
}