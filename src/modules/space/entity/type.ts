import { BaseEntity } from '@zyws-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 图片空间信息分类
 */
@Entity('space_type')
export class SpaceTypeEntity extends BaseEntity {
  @Column({ comment: '类别名称' })
  name: string;

  @Column({ comment: '父分类ID', type: 'tinyint', nullable: true })
  parentId: number;
}
