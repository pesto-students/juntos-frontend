const SECONDS_IN_YEAR = 31536000;
const SECONDS_IN_MONTH = 2592000;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

function truncate(str: string, n: number) {
    if (str.length > n) {
        return str.substr(0, n-1) + '...';
    } else {    
        return str;
    }
};

function fromNow(date: string): string {

    let seconds: number = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000);
    
    /**
     * Years
     */
    let interval = seconds / SECONDS_IN_YEAR;
    if (interval > 1 && interval < 1.5) {
        return "an year ago";
    }
    if (interval >= 1.5) {
      return Math.ceil(interval) + " years ago";
    }

    /**
     * Months
     */
    interval = seconds / SECONDS_IN_MONTH;
    if (interval > 1 && interval < 1.5) {
        return "a month ago";
    }
    if (interval >= 1.5) {
      return Math.ceil(interval) + " months ago";
    }
    /**
     * Days
     */
    interval = seconds / SECONDS_IN_DAY;
    if (interval > 1 && interval < 1.5) {
        return "a day ago";
    }
    if (interval >= 1.5) {
      return Math.floor(interval) + " days ago";
    }
    /**
     * Hours
     */
    interval = seconds / SECONDS_IN_HOUR;
    if (interval > 1 && interval < 1.5) {
        return "an hour ago";
    }
    if (interval >= 1.5) {
      return Math.floor(interval) + " hours ago";
    }
    /**
     * Minutes
     */
    interval = seconds / SECONDS_IN_MINUTE;
    if (interval > 1 && interval < 1.5) {
        return "few minutes ago";
    }
    if (interval >= 1.5) {
      return Math.floor(interval) + " minutes ago";
    }
    /**
     * Seconds
     */
    return Math.floor(seconds) + " seconds ago";
}

export {
    truncate,
    fromNow
}