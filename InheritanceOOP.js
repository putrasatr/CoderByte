function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };
function Teacher(first, last, age, gender, interests, subject) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});
Teacher.prototype.greeting = function () {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.';
    }

    console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'other', ['football', 'cookery'], 'mathematics');
teacher1.greeting()