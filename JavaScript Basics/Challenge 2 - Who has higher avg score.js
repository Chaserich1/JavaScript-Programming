/***************************************************************************
 * Coding Challenge 2: Who has the higher average basketball score?
*/

var johnTeamAvg = (89 + 120 + 103) / 3;
var mikeTeamAvg = (116 + 94 + 23) / 3;
var maryTeamAvg = (97 + 134 + 105) / 3;
console.log(johnTeamAvg, mikeTeamAvg, maryTeamAvg);

if(johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg){
    console.log('Johns team has a higher average score of: ' + johnTeamAvg);
}else if(mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg){
    console.log('Mikes team has a higher average score of: ' + mikeTeamAvg);
}else if(maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg){
    console.log('Marys team has a higher average score of: ' + maryTeamAvg);
} else{
    console.log('Both teams have the same average score of ' + johnTeamAvg + ' and ' + mikeTeamAvg); 
}