import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "services"
})
export class ServicesSchema {
    @PrimaryGeneratedColumn({
        name: "id",
    })
    id?: number;

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