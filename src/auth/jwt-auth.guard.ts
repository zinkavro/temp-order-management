import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid JWT token');
    }

    const token = authHeader.replace('Bearer ', '').trim();

    if (token !== 'demo-jwttoken') {
      throw new UnauthorizedException('Invalid JWT token');
    }

    return true;
  }
}
