import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({
        type: 'varchar',
        length: 31
    })
    username: string;

    @Column({
        type: "varchar"
    })
    email: string;

    @Column({
        type: "varchar",
        length: 46
    })
    password: string;

    @CreateDateColumn()
    createdAt: Date;
}