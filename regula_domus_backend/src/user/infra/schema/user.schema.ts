import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "user",
})
export class UserSchema {
    @PrimaryGeneratedColumn({
        name: "id",
    })
    id?: number;

    @Column({
        type: "varchar",
        name: "name",
        nullable: false,
    })
    name: string;

    @Column({
        type: "varchar",
        name: "email",
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: "varchar",
        name: "password",
        nullable: false,
    })
    password: string;

    @CreateDateColumn({
        type: "timestamp",
        name: "created_at",
        nullable: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "timestamp",
        name: "updated_at",
        nullable: false,
    })
    updatedAt: Date;
    
    @DeleteDateColumn({
        type: "timestamp",
        name: "deleted_at",
        nullable: true,
    })
    deletedAt?: Date;

}