// prisma/seed.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Papa = require('papaparse');

const prisma = new PrismaClient();

async function main() {
    const csvFile = fs.readFileSync('./khuyen_mai_25000_SEM.csv', 'utf8');

    Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: async (results: any) => {
            console.log(`Đã đọc ${results.data.length} dòng từ file CSV...`);

            const dataToInsert = results.data
                .map((item: any) => {
                    const rawCode = item.code || item.Code || item.CODE;

                    if (!rawCode) return null;

                    return {
                        code: rawCode.trim(),
                        brand: "SEMI",
                        isUsed: false
                    };
                })
                .filter(Boolean);

            if (dataToInsert.length === 0) {
                console.error("❌ Không tìm thấy cột 'Code' nào trong file CSV!");
                return;
            }

            try {
                const result = await prisma.rewardCode.createMany({
                    data: dataToInsert,
                    // skipDuplicates: true // Nếu DB của bạn hỗ trợ (MongoDB không hỗ trợ trực tiếp ở createMany)
                });
                console.log(`✅ Thành công! Đã nạp ${result.count} mã vào brand: TOPGIA`);
            } catch (error) {
                console.error("❌ Lỗi: ", error);
            }
        }
    });
}

main();