const log = console.log;
log('');
//============================ Date and Time ================================
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
log(`                  ${dateTime}`);
//===========================================================================
log('');
log('===================== Arnold Zijler ============================');
log('');
log('While loops & for loops: lesson');
log('');

log('======2. Multiplication tables============');
log('');
log('Is niet helemaal gelukt, ik ga verder');


for (let i = 1; i < 10; i++) {
    for (let k = i; k <= 10; k++) {
        let num1 = k;
        let num2 = i;
        let outcome = num1 * num2;
        log(`${num1} x ${num2} = ${outcome}`);      
    }
    log('');
}

