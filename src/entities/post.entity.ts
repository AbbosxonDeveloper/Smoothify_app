import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { UserEntity } from './user.entity';

@Entity({
    name: 'posts'
})
export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    post_id: string;

    @Column({
        type: 'varchar',
        length: 31
    })
    post_title: string;

    @ManyToOne(() => UserEntity, user => user.allposts, {
        onDelete: "CASCADE"
    })
    user: UserEntity[];

    @CreateDateColumn()
    createdAt: Date;
}