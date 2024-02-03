export function balagan() {
  console.log('balagan');

  /**
   * TS gives us the power of static typing.
   * We can start from the basic types:
   * any, string, number, boolean, object, undefined, null, void, never, unknown
   */

  /**
   * In TS we have interfaces and types. Very similar and we don't going to dive-in to the diffrences.
   * Both can give us a lot of power while developing.
   *  */

  // We can build our own types, with Union:
  type Grade = string | number; // Can be a string or a number - for example, "A" or "100
  const myVar: Grade = 'hello';
  const myVar2: Grade = 123;

  type Team = 'Maccabi 💚' | 'Petah Tikva 💙' | 'Tel Aviv 💛';
  const myTeam: Team = 'Maccabi 💚'; // Good
  const myTeam2: Team = 'Hapoel 🙅🏽‍♂️'; // Error

  // We can also use intersection:
  type Sea = 'shark' | 'dolphin' | 'seal' | 'crab';
  type Mammal = 'dolphin' | 'dog' | 'human' | 'seal';
  type SeaMammal = Sea & Mammal;

  const neo: SeaMammal = 'dolphin'; // Good
  const nemo: SeaMammal = 'clownfish'; // Error

  // And make types/interfaces for complex objects:
  interface Student {
    name: string;
    age: number;
    grade: Grade;
    team?: Team; // Optional!
  }

  const nisso: Student = {
    name: 'Nissan Ohana',
    age: 28,
    team: 'Hapoel', // There is no Hapoel in the Team type - Error
    grade: '56',
  };

  // We also can use it for arrays. Just add [].
  const animals: string[] = [];

  animals.push('dog');
  animals.push('shark');
  animals.push('flying bison');
  animals.forEach((animal) => console.log(animal));

  // TS also helps with functions!
  const myFunc = (newGrade: number, poorStudent: Student): Student => {
    const newStudent = { ...poorStudent };
    newStudent.grade = newGrade;
    return newStudent;
  };

  // And, we can use it for classes:
  class Car {
    constructor(public model: string, public year: number) {}
  }

  // Use it:
  const myCar = new Car('Mazda', 2015);
  // Error example:
  const myCar2 = new Car('Mazda', '2015');

  // Use it with Promise!
  // Fetch data from the server with async function:
  // This will return a Promise of an array of Students.
  const fetchData = async (): Promise<Student[]> => {
    const response = await fetch('https://json...');
    const students = await response.json();
    return students;
  };

  // Use it with async/await:
  const getStudents = async () => {
    const students = await fetchData();
    students.forEach((student) => console.log(student.name)); // We get the student type! 🎉
  };

  // Utility types - Partial, Omit, Required
  // Read more here: https://www.typescriptlang.org/docs/handbook/utility-types.html
  interface User {
    name: string;
    age?: number;
    email: string;
  }

  // Required - make all properties required:
  type RequiredUser = Required<User>;
  const regularUser: User = { name: 'Nissan', email: 'nisso@gmail.com' };
  const requiredUser: RequiredUser = {
    name: 'Nissan',
    age: 28,
    email: 'nisso@gmail.com',
  }; // Good
  const userShovav: RequiredUser = { name: 'Nissan', age: 28 }; // Error

  // Partial - make all properties optional:
  type PartialUser = Partial<User>;
  const partialUser: PartialUser = { name: 'Nissan' }; // Good!
  const user: User = { name: 'Nissan' }; // Error

  // Omit - remove properties from a type:
  type UserWithoutEmail = Omit<User, 'email'>;
  const userWithoutEmail: UserWithoutEmail = { name: 'Nissan', age: 28 }; // Good!
}
