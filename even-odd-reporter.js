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
log('======1. Even Odd Reporter============');
for (let i = 1; i <= 20; i++) {
    let result = (i % 2) ? 'odd' : 'even';
    log(`${i} is ${result}`);    
}
log('');




