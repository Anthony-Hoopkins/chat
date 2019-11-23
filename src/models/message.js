import MessageType from '../enums/message-type.enum';
import MessageStatus from '../enums/message-status.enum';

export default class Message {
  constructor() {
    this.id = null;
    this.message = '';
    this.type = MessageType.Incoming;
    this.status = MessageStatus.Sending;
    this.date = '';
  }
}
