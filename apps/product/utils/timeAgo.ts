const convertDate = (intervalParam: number, timeUnitContext: string)=>{
    return `${Math.floor(intervalParam)} ${timeUnitContext}${Math.floor(intervalParam) === 1 ? '' : 's'}`;
}

export const timeAgo =(date: Date): string => {
    // get seconds, (1/1000) == millisecond
    const seconds = Math.round((new Date().getTime() - date.getTime())/ 1000);

    let interval = seconds / 31536000; // 1 Year == 31,536,000's
    if(interval > 1){
         return convertDate(interval, 'year');
    }
    interval = seconds / 2592000; // 1 Month == 2,592,000's
    if(interval > 1){
        return convertDate(interval, 'month');
    }
    interval = seconds/ 604800; // 1 Week == 604,800's
    if(interval > 1){
        return convertDate(interval, 'week');
    }
    interval = seconds/86400; // 1 day == 86,400's
    if(interval > 1){
        return convertDate(interval, 'day');
    }
    interval = seconds/3600; // 1 hour == 3,600's
    if(interval > 1){
        return convertDate(interval, 'hour');
    }
    interval = seconds/60; // 1 minute == 60's
    if(interval > 1){
        return convertDate(interval, 'minute');
    }
    return convertDate(interval,'second');
}