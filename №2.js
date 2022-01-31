let name = "Павел";
let surname = "Кузнецов";

nameNotCheck = name.substr(1) 
nameNotCheck2 = name.substr(0, 1)

surnameNotCheck = surname.substr(1) 
surnameNotCheck2 = surname.substr(0, 1)

nameCheck = nameNotCheck.toLowerCase();
nameCheck = nameNotCheck2.toUpperCase() + nameCheck;
console.log(nameCheck);

surnameCheck = surnameNotCheck.toLowerCase();
surnameCheck = surnameNotCheck2.toUpperCase() + surnameCheck;
console.log(surnameCheck);

if (name != nameCheck || surname != surnameCheck) 
{
    console.log("Изменения были внесены")
}
else
{
    console.log("Изменения не были внесены")
}