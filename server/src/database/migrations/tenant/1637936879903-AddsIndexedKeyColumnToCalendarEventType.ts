import {MigrationInterface, QueryRunner} from "typeorm";

export class AddsIndexedKeyColumnToCalendarEventType1637936879903 implements MigrationInterface {
    name = 'AddsIndexedKeyColumnToCalendarEventType1637936879903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event_type" ADD "key" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_927e6ee6a33fc52a4f99aa0246" ON "calendar_event_type" ("key") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_927e6ee6a33fc52a4f99aa0246"`);
        await queryRunner.query(`ALTER TABLE "calendar_event_type" DROP COLUMN "key"`);
    }

}
