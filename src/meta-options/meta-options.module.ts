import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { MetaOptionsService } from './meta-options.service';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MetaOptionsController],
  providers: [MetaOptionsService],
  imports: [DatabaseModule],
})
export class MetaOptionsModule {}
