//your JS code here. If required.
Get Object Keys


const student = {
    name: "Rishab"
};

Object.prototype.getKeys = function() {
    return Object.keys(this);
};

console.log(student.getKeys());