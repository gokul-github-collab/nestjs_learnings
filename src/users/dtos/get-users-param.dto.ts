import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;
}
