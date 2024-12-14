import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-option.dto';
import { DatabaseService } from 'src/database/database.service';
import { MetaOptions } from '@prisma/client';

@Injectable()
export class MetaOptionsService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  async create(
    createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOptions> {
    return this.dataBaseService.metaOptions.create({
      data: createPostMetaOptionsDto,
    });
  }
}
