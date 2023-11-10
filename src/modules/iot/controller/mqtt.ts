import { Get, Inject, Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@zyws-midway/core';
import { CoolMqttServe } from '@zyws-midway/iot';

/**
 * MQTT
 */
@Provide()
@CoolController()
export class IotMqttController extends BaseController {
  @Inject()
  coolMqttServe: CoolMqttServe;

  @Get('/publish')
  async publish() {
    await this.coolMqttServe.publish('presence', 'hello');
    return this.ok();
  }
}
