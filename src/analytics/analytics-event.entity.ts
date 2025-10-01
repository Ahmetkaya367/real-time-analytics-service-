import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum EventType {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  LOGIN = 'login',
  LOGOUT = 'logout',
  OTHER = 'other',
}

@Entity()
export class AnalyticsEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({
    type: 'enum',
    enum: EventType,
    default: EventType.OTHER,
  })
  type: EventType;

  @Column({ nullable: true })
  metadata: string | null; 

  @CreateDateColumn()
  createdAt: Date;
}
