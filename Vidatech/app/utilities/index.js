export function sortList(list, key) {
    return list.sort((item1, item2) => {
        if (item1[key] < item2[key]) {
            return -1;
        } else if (item1[key] > item2[key]) {
            return 1;
        } else {
            return 0;
        }
    })
}

export function formatDate(inputDate, format = "dd MMM yyyy") {
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    let formattedDate = "";
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "June", "July",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    if (format === "dd MMM yyyy") {
        formattedDate = `${date} ${monthNames[month]} ${year}`;
    }
    return formattedDate;
}

export function filterList(list = [], key = 'name', inputVal = '') {
    const filterList = list.filter((item) => {
        const filterVal = convertToString(item[key]);
        const expectedVal = convertToString(inputVal);
        if (typeof filterVal === 'string') {
            return filterVal.match(expectedVal)
        } else {
            return filterVal === expectedVal;
        }
    });
    return filterList;
}

export function convertToString(str = '', convertTo = 'lowercase') {
    let convertedStr = str;
    if (typeof str === 'string') {
        if (convertTo === 'lowercase') {
            convertedStr = str.toLowerCase();
        } else {
            convertedStr = str.toUpperCase()
        }
    }
    return convertedStr;
}