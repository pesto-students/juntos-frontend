function truncate(str: string, n: number) {
    if (str.length > n) {
        return str.substr(0, n-1) + '...';
    } else {    
        return str;
    }
};

export {
    truncate
}