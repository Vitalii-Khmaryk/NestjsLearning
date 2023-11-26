import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDb1690033594703 implements MigrationInterface {
    name = 'SeedDb1690033594703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO tags (name) VALUES ('dragons'),('coffe'),('nestjs')`);
        await queryRunner.query(`INSERT INTO users (username, email, password) VALUES ('tester', 'tester@gmail.com', '$2b$10$aj1up.6QAxnumR/Hhs.bcexNkluIVecmxGPdwQDq54eDSaHuv23yy')`);
        await queryRunner.query(`INSERT INTO articles (slug,title,description,body,"tagList","authorId") VALUES ('first-article','First article','first article desc','first article body','coffee,dragons',1)`);
        await queryRunner.query(`INSERT INTO articles (slug,title,description,body,"tagList","authorId") VALUES ('second-article','Second article','second article desc','second article body','coffee,dragons',1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
