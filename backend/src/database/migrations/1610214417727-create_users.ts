import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1610214417727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Create
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'passwordResetToken',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'passwordResetExpires',
                    type: 'date',
                    isNullable: true,
                },
                {
                    name: 'createdAt',
                    type: 'date',
                    default: Date.now(),
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Delete
        await queryRunner.dropTable('users')
    }

}
