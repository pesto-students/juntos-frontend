function getDurationByUnit(input: string, unit: string): string{
    let index = input.indexOf(unit);
    let output = "00";
    
    if(index < 0){
        return output;
    }

    if(isNaN(parseInt(input.charAt(index-2)))) {
        return '0' + input.charAt(index-1);
    } else {
        return input.charAt(index-2) + input.charAt(index-1);
    }
}

function ISO8601toHumanReadable(input:string): string {
    let H = getDurationByUnit(input, 'H');
    let M = getDurationByUnit(input, 'M');
    let S = getDurationByUnit(input, 'S');

   if (H === "00") {
     H = "";
   } else {
     H += ":"
   }

   return H  + M + ':' + S ;
}

function viewsFormatter(num: number): string {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

export {
    ISO8601toHumanReadable,
    viewsFormatter
}