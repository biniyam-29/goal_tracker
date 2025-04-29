import { IsString } from 'class-validator';

export class telegramMessageDto {
  @IsString()
  body: string;
}
