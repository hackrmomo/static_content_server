import { Service } from 'typedi';

@Service()
export class AuthService {
  private _message = 'Message';

  getMessage(): string {
    return this._message;
  }
}