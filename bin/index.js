/*
* obj: sample Object
* returnType: HTML or CONSOLE
*/
const getObjectStringHtml = (obj) => {
    let keys = Object.keys(obj);
    let stringToReturn = "";
    keys.map(key => {
        let keyToInt = parseInt(key, 10);
        if (!isNaN(keyToInt)) {
            stringToReturn += `<p>====${key}====<p>${getObjectString(obj[key], returnType)}</p></p>`;
        } else if (typeof obj[key] === 'object') {
            stringToReturn += `<p> <u>${key.toUpperCase()}</u> <p>${getObjectString(obj[key], returnType)}</p></p>`;
        } else {
            stringToReturn += `<p> ${key} = ${obj[key]}</p>`;
        }
    });
    return stringToReturn;
};


const getObjectStringConsole = (obj) => {
    let keys = Object.keys(obj);
    let stringToReturn = "";
    keys.map(key => {
        let keyToInt = parseInt(key, 10);
        if (!isNaN(keyToInt)) {
            stringToReturn += `\n====${key}====\n${getObjectString(obj[key], returnType)}`;
        } else if (typeof obj[key] === 'object') {
            stringToReturn += `\n${key.toUpperCase()}  \n${getObjectString(obj[key], returnType)}\n`;
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
