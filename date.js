function getDate(){
    let today = new Date();
    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleString("en-us", options);
    return day;
}
module.exports.getDate = getDate;