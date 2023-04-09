import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { PostEntity } from './post.entity';

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 31
    })
    username: string;

    @Column({
        type: "varchar",
        unique: true
    })
    email: string;

    @Column({
        type: "varchar",
        length: 46
    })
    password: string;

    @OneToMany(() => PostEntity, posts => posts.user)
    allposts: PostEntity[];

    @CreateDateColumn()
    createdAt: Date;
}