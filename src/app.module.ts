import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
  //controllers에서는 provider에서 주입받은것들만 사용이 가능하다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
