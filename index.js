//Write your code here
let attendee ={
  attendeeId:"T001",
  name:"Alice Smith",
  event:"Javascript Conference",
  ticketType:"VIP",
  ticketPrice :150.00

}


function logAttendeeName (){
  const theName= Object.values(attendee)[1];
  console.log (theName);
};

logAttendeeName()
function logTicketPrice (){
  const thePrice =Object.values(attendee)[4];
console.log (thePrice)
 }
logTicketPrice()
function updateTicketType(attendee, newTicketType) {
 attendee.ticketType= newTicketType;
 
}
updateTicketType(attendee,"hallpass");


console.log (attendee)




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};