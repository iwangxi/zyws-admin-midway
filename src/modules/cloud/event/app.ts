import { IMidwayApplication } from '@midwayjs/core';
import { CoolEvent, Event } from '@zyws-midway/core';
import { App } from '@midwayjs/decorator';
import { CloudDBService } from '../service/db';

/**
 * 应用事件
 */
@CoolEvent()
export class AppEvent {
  @App()
  app: IMidwayApplication;

  @Event('onDBInit')
  async onDBInit() {
    this.initEntity();
  }

  async initEntity() {
    const cloudDBService = await this.app
      .getApplicationContext()
      .getAsync(CloudDBService);
    cloudDBService.initEntity();
  }
}
