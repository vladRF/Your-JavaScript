function createCompanyObject (name, address, timeStart, timeEnd){
 let obj = {
    name:name,
    address:address,
    time:`${timeStart} - ${timeEnd}`,

 }
 console.log(obj);
}

createCompanyObject("Star", "Moskau", "9:00", "22:00")