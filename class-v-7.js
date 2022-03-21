class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
// aamir.startSession();
// salman.startSession();
// console.log(aamir, salman, sharuk, akshay);
// console.log(salman);

class faltu{
    name;
    time = '2pm'
    hour = '2hr'
    place = 'dhaka college'
    constructor (name, time, place) {
        this.name = name;
        this.time = time;
        this.place = place;

    }
    faltuClass(){
        console.log(this.name, 'khub e baje class nei')
    }
}

const apon = new faltu('Apon','2pm','dhaka college');
const nahid = new faltu('Nahid','3pm','city college');
const shafin = new faltu('shafin','7am','commerce college');
const shuvo = new faltu('shuvo','1pm','bangla college');

apon.faltuClass();

console.log(apon,nahid,shafin,shuvo);