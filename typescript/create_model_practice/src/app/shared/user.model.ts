export interface IUser {
  name: string;
  age: number;
  gender: string;
  hobby?: Array<string>;
}

export class User implements IUser {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public hobby: Array<string>
  ) {}
}
