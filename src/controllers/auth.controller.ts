import { Controller, GET } from 'fastify-decorators';
import { AuthService } from '../services/auth.service.js';
import { Inject, Service } from 'typedi';

@Controller('/auth')
@Service()
export default class AuthController {
  @Inject() private _authService!: AuthService;

  @GET()
  async getSync(): Promise<string> {
    console.log("AuthService", this._authService)
    return "Hello World";
  }
}