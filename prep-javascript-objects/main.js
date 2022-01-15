var person = {
  firstName: 'Jeffrey',
  lastName: 'Santoso',
  hobby: 'FGO'
};
console.log(person);
var fullName = person.firstName.concat(' ', person.lastName);
console.log('The person\'s name is:', fullName);
person.job = 'scientist';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'student';
console.log('the person\'s previous job is:', person.previousJob);
console.log('The complete person object:', person);
