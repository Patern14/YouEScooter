import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1627265408277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase("yourescooter", true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase("yourescooter", true);
    }

}
