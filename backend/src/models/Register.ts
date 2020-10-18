import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('register')
export default class Register {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}