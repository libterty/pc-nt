import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeUpdate,
  Column,
  Index,
} from 'typeorm'

@Entity({
  name: 'users',
})
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', nullable: false, length: 255 })
  public name: string

  @Column({ type: 'varchar', nullable: true, length: 255 })
  public nick_name: string

  @Index({ unique: true, where: 'email IS NOT NULL AND deleted_at IS NULL' })
  @Column({ type: 'varchar', nullable: false })
  public email: string

  @Column({ type: 'varchar', nullable: true, select: false })
  public password: string

  @Column({ type: 'varchar', nullable: true, select: false })
  public salt: string

  /**
   * @description version control
   */
  @VersionColumn({ type: 'integer', nullable: false })
  public readonly version: number

  /**
   * @description Time area
   */
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public created_at: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  public updated_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: false })
  public deleted_at: Date

  @BeforeUpdate()
  setUpdateDate(): void {
    this.updated_at = new Date()
  }
}
