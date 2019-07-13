//Codesprint tasks
//Task 1

var object={name:"Rajinikanth",age:33, haspets:false};
function printAllValues(obj){
    alert(Object.values(obj));

}
printAllValues(object)

//Task 2

var object={name:"Rajinikanth",age:33, haspets:false};
function printAllValues(obj){
    alert(Object.keys(obj));

}
printAllValues(object)

//Task 3

var object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertListToObject(obj) {
    console.log(Object.entries(obj));
 
}
convertListToObject(object);

//Task 4

var array =["Guvi","I", "am","Geek"];
function transformFirstAndLast(arr) {

    var f=array[0];
    var newObject={}
    newObject[f]=arr[arr.length-1];
    return newObject;
   }
   console.log(transformFirstAndLast(array));
   
   //Task 5
   var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for(var i=0;i<arr.length;i++){
        newObject[arr[i][0]=arr[i][1]];
    }
    
    return newObject;
   }
   console.log(fromListToObject(array));
   
   //Task6
   
   var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
 [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for(var i=0;i<2;i++){
        tranformEmployeeList.push(Object.fromEntries(array[i]));

    }
    
    //Your code
    
    return tranformEmployeeList;
   }
   console.log(transformEmployeeData(array));
   
   //Task 7
   
   var expected={foo:5,bar:6};
var actual={foo:5,bar:6};
if JSON.stringify(expected)===JSON.stringify(actual){
    console.log("Passed");

}
else{
    console.log("failed"+expected,"but got"+actual)
}

