let pass = "terka";

if (pass.length >= 4 && (pass.includes("-") || pass.includes("_"))){
    console.log("Пароль подходит")
}
else{
    console.log("Пароль не подходит")
}