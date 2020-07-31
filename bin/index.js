/*
* obj: sample Object
*/
const getObjectStringHtml = (obj) => {
    let keys = Object.keys(obj);
    let stringToReturn = "";
    keys.map(key => {
        if (Array.isArray(obj[key])) {
            stringToReturn += `<p>====${key}====<p>${getObjectStringHtml(obj[key])}</p></p>`;
        } else if (typeof obj[key] === 'object') {
            stringToReturn += `<p> <u>${key.toUpperCase()}</u> <p>${getObjectStringHtml(obj[key])}</p></p>`;
        } else {
            stringToReturn += `<p> ${key} = ${obj[key]}</p>`;
        }
    });
    return stringToReturn;
};

/*
* obj: sample Object
*/
const getObjectStringConsole = (obj) => {
    let keys = Object.keys(obj);
    let stringToReturn = "";
    keys.map(key => {
        if (Array.isArray(obj[key])) {
            stringToReturn += `\n====${key}====\n${getObjectStringConsole(obj[key])}`;
        } else if (typeof obj[key] === 'object') {
            stringToReturn += `\n${key.toUpperCase()}  \n${getObjectStringConsole(obj[key])}\n`;
        } else {
            stringToReturn += `${key} = ${obj[key]}\n`;
        }


    });
    return stringToReturn;
};

module.exports = {
    getObjectStringHtml,
    getObjectStringConsole
};
