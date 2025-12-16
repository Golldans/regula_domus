import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "billing",
})
export class BillingSchema {
    @PrimaryGeneratedColumn({
        name: "id",
    })
    id?: number;

    @Column({
        type: "int",
        name: "due_day",
        nullable: false,
    })
    dueDay: number;

    @Column({
        type: "decimal",
        name: "value",
        nullable: false,
    })
    value: number;

    @Column({
        type: "varchar",
        name: "name",
        nullable: false,
    })
    name: string;

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