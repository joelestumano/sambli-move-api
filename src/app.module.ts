import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getEnvPath } from './common/helper/env.helper';
import dbConfig from './common/configs/db.config';
const envFilePath: string = getEnvPath(`${__dirname}/common/envs/`);

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      isGlobal: true,
      load: [dbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('dbconfig.host'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
