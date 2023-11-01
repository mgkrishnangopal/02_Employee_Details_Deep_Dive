const employees = [
    {
      id: "C101",
      name: "Varun",
      role: "Junior Web Developer",
      experience: "2 Years",
      payout: "25000",
    },
    {
      id: "C102",
      name: "Srinika",
      role: "Junior Web Developer",
      experience: "1 Year",
      payout: "20000",
    },
    {
      id: "C103",
      name: "Rakshitha",
      role: "Front End Developer",
      experience: "3 Years",
      payout: "30000",
    },
    {
      id: "C104",
      name: "Hema",
      role: "Junior Web Developer",
      experience: "3 Years",
      payout: "25000",
    },
    {
      id: "C105",
      name: "Deepak",
      role: "Front End Developer",
      experience: "4 Years",
      payout: "35000",
    },
    {
      id: "C106",
      name: "Sakthi",
      role: "Back End Developer",
      experience: "2 Years",
      payout: "30000",
    },
    {
      id: "C107",
      name: "Dakshan",
      role: "Senior Front End Developer",
      experience: "5 Years",
      payout: "45000",
    },
    {
      id: "C108",
      name: "Ananth",
      role: "BDE",
      experience: "2 Years",
      payout: "20000",
    },
    {
      id: "C109",
      name: "Sharaddha",
      role: "Business Associate",
      experience: "1 Year",
      payout: "15000",
    },
    {
      id: "C110",
      name: "Dinesh",
      role: "Tech Lead",
      experience: "4 Years",
      payout: "65000",
    },
  ];
  
  // const name_employees =employees.map(function(employe){
  //   return employe.name;
  // })

  // console.log("EMPLOYEES NAME"+" = " +name_employees+" .");

console.log("----------2-----------");
console.log("Junior web developer = ");
let i=0;
  const name_role =employees.filter(function(employe){
    
   if( employe.role=="Junior Web Developer"  ){
    console.log(employe.name+",");
    i++;
   }  
  });

  console.log("----------3-----------");
  console.log(" Total Junior Web Developers ="+i+".");

  console.log("----------4-----------");

  console.log("Salary betwewn 25000to35000 employee name and role");
const salary_between=employees.filter(function(salary){

if(salary.payout>24999&&salary.payout<35001){
console.log( "Name= "+salary.name+",");
console.log( "Role= "+salary.role+",");
console.log( "Payout= "+salary.payout+".");
}

});

console.log("----------5-----------");
const senior=employees.sort(function(previous,next){
if(previous.experience<next.experience){
  return -1;
}
});

const senior_employee = senior[senior.length-1];
 console.log(senior_employee);