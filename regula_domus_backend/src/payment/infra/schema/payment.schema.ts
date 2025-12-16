import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "payment",
})
export class PaymentSchema {
    @PrimaryGeneratedColumn({
        name: "id",
    })
    id?: number;

    @Column({
        name: "billing_id",
        type: "int",
        nullable: false,
    })
    billingId: number;

    @Column({
        name: "billing_name",
        type: "varchar",
        nullable: false,
    })
    billingName: string;

    @Column({
        name: "value",
        type: "decimal",
        default: 0,
        nullable: false,
    })
    value: number;

    @Column({
        name: "user_id",
        type: "int",
        nullable: false,
    })
    userId: number;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
        nullable: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
        nullable: false,
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: "deleted_at",
        type: "timestamp",
        nullable: true,
    })
    deletedAt?: Date;
}