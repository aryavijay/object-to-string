# object-to-string

This package has two  function

1. getObjectStringConsole:
    For getting output string for consoles

2. getObjectStringHtml
    For getting output string for browsers or getting HTML content


Example:

 const objToStr = require('obect-to-string');

const testSub = {
    "type": 2,
    "value": "test",
    "address": "string"
};

console.log(objToStr.getObjectStringHtml(testSub));
Output:
<p> type = 2</p>
<p> value = test</p>
<p> address = string</p>


console.log(objToStr.getObjectStringConsole(testSub));

Output:
type = 2
value = test
address = string
