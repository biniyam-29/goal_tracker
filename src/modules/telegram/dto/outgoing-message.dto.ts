import { IsString } from 'class-validator';

export class OutGoingMessageDto {
  @IsString()
  body: string;

  @IsString()
  token: string;

  @IsString()
  address: string;
}
