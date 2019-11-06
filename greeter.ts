//接口
interface Person {
  firstName: string;
  lastName: string;
}
//类
class Student {
  fullName: String;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello" + person.firstName + person.lastName;
}

let user = new Student("joe", "z", "bbc");

var res = greeter(user);

console.log(res);
