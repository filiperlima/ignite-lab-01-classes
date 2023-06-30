import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestResolver } from './authorization/test.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'node:path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [TestResolver],
})
export class HttpModule {}
