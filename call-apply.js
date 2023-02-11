const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName) 
    },
    chargeBill: function(amount,tax,fun){
        this.salary = this.salary - amount - tax - fun;
        return this.salary;
    }
    
}

// normalPerson.getFullName();
// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName: 'hero',
    lastName: 'balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'hero',
    lastName: 'kalam',
    salary: 25000
}
//binding
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(1500);
console.log(heroPerson.salary);
const fullName = normalPerson.getFullName.bind(heroPerson);
fullName();

//call
normalPerson.chargeBill.call(heroPerson,1654,155,244);
console.log(heroPerson);

//apply
normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
normalPerson.chargeBill.apply(heroPerson,[2000,200,20]);
console.log(heroPerson);
