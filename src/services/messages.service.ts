import { HttpException } from '@exceptions/httpException';
import { Message } from '@interfaces/messages.interface';
import { MessageModel } from '@models/messages.model';
import { Service } from 'typedi';

@Service()
export class MessageService {
  public async findAllMessage(): Promise<Message[]> {
    const messages: Message[] = await MessageModel.find();
    return messages;
  }

  public async findMessageById(messageId: string): Promise<Message> {
    const findMessage: Message = await MessageModel.findOne({ _id: messageId });
    if (!findMessage) throw new HttpException(409, "Message doesn't exist");

    return findMessage;
  }

  public async createMessage(messageData: Message): Promise<Message> {
    const createMessageData: Message = await MessageModel.create({ ...messageData });

    return createMessageData;
  }

  public async deleteMessage(messageId: string): Promise<Message> {
    const deleteMessageById: Message = await MessageModel.findByIdAndDelete(messageId);
    if (!deleteMessageById) throw new HttpException(409, "Message doesn't exist");
    return deleteMessageById;
  }
}
