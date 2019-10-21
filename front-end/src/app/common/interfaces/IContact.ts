export interface ILoginRes {
  name: string;
  email: string;
  phone: [{
    label: string,
    number: number,
  }];

}
