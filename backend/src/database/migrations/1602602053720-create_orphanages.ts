import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602602053720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar alterações
        //criar tabela, criar um novo campo, deletar algum campo

        await queryRunner.createTable(new Table({
            name: 'orphanages',
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
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'telefone',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'pending',
                    type: 'boolean',
                },
                {
                    name: 'user_id',
                    type: 'varchar',
                }
            ],
            foreignKeys: [
                {
                    name: 'user_id',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZER o que foi feito no Up

        await queryRunner.dropTable('orphanages');
    }

}
