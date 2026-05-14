import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  await prisma.newsAnnouncement.createMany({
    data: [
      {
        titleEn: "MakeCareer website launched",
        titleJa: "MakeCareerウェブサイトを公開しました",
        bodyEn: "We are excited to announce the launch of our new website.",
        publishedAt: new Date("2026-01-10"),
      },
      {
        titleEn: "New office opened in Osaka",
        titleJa: "大阪に新しいオフィスを開設しました",
        publishedAt: new Date("2026-03-01"),
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
