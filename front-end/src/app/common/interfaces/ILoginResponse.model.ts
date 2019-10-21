export interface ILoginRes {
  message: string;
  success: boolean;
  token: string;
  user: {
    email: string;
    name: string;
    phone: string;
    _id: string;
  };
}
