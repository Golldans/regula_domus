import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "alert",
})
export class AlertSchema {
    @PrimaryGeneratedColumn({
        name: "id",
    })
    id?: number;

    @CreateDateColumn({
        type: "timestamptz",
        name: "created_at",
        nullable: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "timestamptz",
        name: "updated_at",
        nullable: false,
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: "timestamptz",
        name: "deleted_at",
        nullable: true,
    })
    deletedAt?: Date;
}