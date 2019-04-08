export const time = () => {
 const startTime = new Date();
 let hours = startTime.getHours() % 12;
 let minutes = startTime.getMinutes();
 let seconds = startTime.getSeconds();
 let AM_flag = startTime.getHours() < 12 ? true : false;

 const {
  body
 } = document;

 var secondsStart = secondsClock();
 var minutesStart = minutesClock();
 var hoursStart = hoursClock();
  
 function* secondsClock () {
  let index = seconds;
   while(true){
     if (index === 59){
     index = -1;
     minutes = minutesStart.next().value;
    };
    yield ++index;
   }
 };

 function* minutesClock () {
  let index = minutes;
  while(true){
    if(index === 59){
    index = -1;
    hours = hoursStart.next().value;
   }; 
   yield ++index;
  }
 };

 function* hoursClock () {
  let index = hours;
  while(true){
    if(index === 11){
    index = -1;
    AM_flag = !AM_flag;
   };
   yield ++index;
  }
 };


 setInterval(function(){
  seconds = secondsStart.next().value;
  render();
 }, 1000);
 
//Display:
 const div = document.createElement('div');
 Object.assign(div.style, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform : 'translate(-50%,-50%)',
  color: 'red',
  fontSize: '6rem'
 })
 function render(){
  div.innerHTML = `<span>${hours > 9 ? hours : "0"+hours}</span> : <span>${minutes > 9 ? minutes : "0"+minutes}</span> : <span>${seconds > 9 ? seconds : "0"+seconds}</span> <span>${AM_flag ? ' AM' : ' PM'}</span>`;
  body.appendChild(div);
  console.log(hours, minutes, seconds);
 };
 render();
}
