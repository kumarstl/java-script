
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sourav = new Teacher("sourav", "sourav@.com", "123")

sourav.logMe()
const kumar = new User("kumar-sourav")

kumar.logMe()

console.log(kumar instanceof User);
