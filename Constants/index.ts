export interface IUser {
    displayName : string | null;
    photoURL : string | null;
    email : string | null;
    phoneNumber: string | null;
    uid: string | null;
}

export interface IClass {
    id : string;
    className : string;
    owner : string;
    room : string;
    section : string;
    subject : string;
}