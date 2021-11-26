import {MigrationInterface, QueryRunner} from "typeorm";

export class RenamedColumnForCalendarEventTypeToName1637927979545 implements MigrationInterface {
    name = 'RenamedColumnForCalendarEventTypeToName1637927979545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event_type" RENAME COLUMN "calendar_event_type" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event_type" RENAME COLUMN "name" TO "calendar_event_type"`);
    }

}
