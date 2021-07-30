export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    token?: string;
    password?: string;
}