import { BaseCoolQueue, CoolQueue } from '@zyws-midway/task';

/**
 * 主动消费队列
 */
@CoolQueue({ type: 'getter' })
export class DemoGetterQueue extends BaseCoolQueue {}
