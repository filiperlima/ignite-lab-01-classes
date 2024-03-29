import { Request as JWTRequest } from 'express-jwt';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface AuthUser {
  sub: string;
}
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): AuthUser => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req as JWTRequest;
    return {
      sub: req.auth.sub,
    };
  },
);
