/*
* sqtime.js: Implementation of the Postgres SQL time scheme for JavaScript
* Based on <https://gist.github.com/jczaplew/f055788bf851d0840f50>
* 11/20/22
*/
class SQTime {
    constructor() {
        return new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','');
    }
}