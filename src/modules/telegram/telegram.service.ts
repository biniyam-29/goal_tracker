import { Injectable } from '@nestjs/common';
import { TelegramData } from './telegram';
import { telegramMessageDto } from './dto/incoming-messsage.dto';
import { OutGoingMessageDto } from './dto/outgoing-message.dto';

@Injectable()
class TelegramService {
  
  async recieve(incoming: TelegramData): Promise<telegramMessageDto> {
    let message: telegramMessageDto = {
      body: incoming.message.text,
    };
    const chat: OutGoingMessageDto = {
      body: message.body,
      token: '7237693210:AAE5-wnuwTTHdn2BM-d-PyttdIZdy9iXzUo',
      address: '5209941226',
    };
    this.send(chat);
    return message;
  }

  async send(outgoing: OutGoingMessageDto) {
    return fetch('https//:www.telegram.org/bot' + outgoing.token + '/sendMessage', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(outgoing.body),
    });
  }
}
