import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'docker.for.mac.localhost',
        port: 1025,
      },
      defaults: {
        from: 'no-reply@example.com',
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
