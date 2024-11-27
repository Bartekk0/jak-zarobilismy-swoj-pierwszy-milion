export class User {
    username: string
    email: string
    password: string

    constructor(username: string, email: string, password: string) {
        this.password = password
        this.username = username
        this.email = email 
    }
    saveToJohson() {
        // const user = JSON.stringify()
    }
    exists() {

    }
    // static remove(email, password) {

    // }
}