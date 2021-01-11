import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1610214417727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Create
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
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
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Delete
        await queryRunner.dropTable('users')
    }

}
