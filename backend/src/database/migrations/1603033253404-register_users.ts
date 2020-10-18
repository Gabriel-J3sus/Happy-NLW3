import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class registerUsers1603033253404 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const UserSchema = await queryRunner.createTable(new Table({
            name: 'register',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isPrimary: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('register');
    }

}
