//var typecomputer= prompt('please enter type of acomputer (dell, acer)?')
/*while (typecomputer !=='dell'   &&typecomputer!=='acer') {
  typecomputer= prompt('please enter typecomputer ( dell,acer)?');
  console.log(typecomputer);
}
var computerNumber = prompt('how many computer do you want to order?');
for (var i = 1; i <=computerNumber; i++){




if(typecomputer=='dell'){
 var image = '<img src="js/img/dell.jpg" alt= "dell"/>';
   
    document.write(image);
  
}

else if(typecomputer=='acer')
{
 var image2 = '<img src="js/img/acer.jpg" alt="dell"/>';
   
    document.write(image2);
} 



}*/
function askcustomer(type1,type2){
  var nametypecomputer = type1 + type2;
  console.log(nametypecomputer);
  return nametypecomputer;
}

  askcustomer('dell','hp');
  


