export interface IUser {
    _id: string;
    username: string;
    email: string;
    role: string;
    token?: string;
    password?: string;
}