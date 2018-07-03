import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { Observable, of } from 'rxjs/index';

@WebSocketGateway()
export class MessageGateway {

  @SubscribeMessage('message')
  onEvent(client: any, payload: any): WsResponse<any> {
    console.log(payload);
    return {event: 'message', data: payload};
  }
}
