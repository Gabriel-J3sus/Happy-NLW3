import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from "typeorm";
import bcrypt from 'bcryptjs';

import Orphanage from "./Orphanage";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    passwordResetToken: string;
    
    @Column()
    passwordResetExpires: Date;
    
    @Column()
    createdAt: Date;


    @OneToMany(() => Orphanage, orphanage => orphanage.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanages_id' })
    orphanages: Orphanage[];

    //password hashed
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}