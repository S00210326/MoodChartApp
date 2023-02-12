import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  private readonly secret = 'YOUR_SECRET_KEY';

  constructor() { }

  public generateToken(user: any): string {
    const payload = {
      id: user.id,
      username: user.username,
      // Add any other relevant user data to the payload
    };
    return jwt.sign(payload, this.secret);
  }

  public verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
