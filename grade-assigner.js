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

log('======1. The grade assigner============');
const assignGrade = score => {
    return (score > 90) ? 'A'
        : (score > 80) ? 'B'
        : (score > 70) ? 'C'
        : (score > 65) ? 'D'
        : 'E';        
};

for (let i = 60; i < 100; i++) {
    let score = i;
    log(`Your score = ${score}`);
   let grade = assignGrade(score);
   log(`and your grade = ${grade}`);
   log('');
}
