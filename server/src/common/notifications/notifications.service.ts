import { Injectable } from '@nestjs/common';
import { BatchResponse, MessagingDevicesResponse, MessagingPayload, MulticastMessage, NotificationMessagePayload } from 'firebase-admin/lib/messaging/messaging-api';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

import { DeviceCode } from 'src/database/entities/tenant/device-code.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectFirebaseAdmin() 
    private readonly _firebase: FirebaseAdmin
  ) { }

  public async sendNotificationToDevice(device: DeviceCode): Promise<boolean> {
    const response: MessagingDevicesResponse = await this._firebase.messaging.sendToDevice(device.token, {
      notification: {
        title: 'Test Title',
        body: 'This is a testing push notification'
      } as NotificationMessagePayload
    } as MessagingPayload)
    return true;
  }

  public async sendNotificationToDevices(devices: DeviceCode[]): Promise<boolean> {
    // @TODO messaing send multicasting to multiple devices
    const response: BatchResponse = await this._firebase.messaging.sendMulticast({
      tokens: devices.map(device => device.token),
      notification: {
        title: 'Test Title',
        body: 'This is a testing push notification'
      } as NotificationMessagePayload
    } as MulticastMessage);
    return true;
  }
}
