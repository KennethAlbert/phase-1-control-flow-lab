function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if(distance<=400){
    return message='This one is on me!';
  }
 else if(distance>2000 && distance<=2500){
   return message='I will gladly take your thirty bucks.'
 }
 else if (distance>2500)
   return message='No can do.'
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);



function ternaryCheckCity(city){
  // Write your code here!
return city==="NYC" ? "Ok, sounds good.": "No go.";

}


function switchOnCharmFromTip(value){
  // Write your code here!
  switch (value) {
    case 'generous':
        value = 'Thank you so much.';
        break;
    case 'not as generous':
        value = 'Thank you.';
        break;
    case 'thanks for everything':
          value = 'Bye.';
    }
    return value;
}
