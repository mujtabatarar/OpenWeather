/**
 * this is module made by mujtaba to access data and time is this format.
 * wednesday 31st march, 2022
 */

import React from "react";

function DateAndTimeByMujtaba(){
        let d  = new Date();
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const months = ["Janvary", "Febuary", "March", "April", "May", "june", "July", "August", "September", "Octuber", "November", "December"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();



         return(
                 <>
                        <text className="date-time-mod">{day} {date}, {month} {year}</text>
                 </>
                 );

}
export default DateAndTimeByMujtaba;