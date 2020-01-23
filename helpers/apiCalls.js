import moment from "moment";

// Fetch calendar data.
export const fetchCalendarParking = () => {
    const firstDay = moment().startOf('month').startOf('week'); // first day of first week of the month
    const lastDay = moment().endOf('month').endOf('week'); // last day of the last week of the month

    
}