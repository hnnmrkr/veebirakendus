export class Kasutaja {
    constructor(
        public id: number,
        public username: string,
        public firstname: string,
        public lastname: string,
        public password: string
    ) {}

    set id(newID: number) {
        this.id = newID;
    }

    set username(newUsername: string) {
        this.username = newUsername;
    }

    set firstname(newFirstname: string) {
        this.firstname = newFirstname;
    }

    set lastname(newLastname: string) {
        this.lastname = newLastname;
    }

    set password(newPassword: string) {
        this.password = newPassword;
    }
}