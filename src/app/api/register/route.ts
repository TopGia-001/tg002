import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { rewardCode } = body;

        await prisma.codeAttempt.create({
            data: { code: rewardCode }
        });

        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const attemptCount = await prisma.codeAttempt.count({
            where: {
                code: rewardCode,
                createdAt: { gte: fiveMinutesAgo }
            }
        });

        if (attemptCount > 3) {
            return NextResponse.json({ status: "EXCEED" }, { status: 429 });
        }

        const codeData = await prisma.rewardCode.findUnique({
            where: { code: rewardCode },
        });

        if (!codeData) {
            return NextResponse.json({ status: "INVALID" }, { status: 404 });
        }

        if (codeData.isUsed) {
            return NextResponse.json({ status: "USED" }, { status: 400 });
        }

        const { fullName, phone, dob, address } = body;
        await prisma.$transaction([
            prisma.rewardCode.update({
                where: { code: rewardCode },
                data: { isUsed: true }
            }),
            prisma.player.create({
                data: {
                    rewardCode,
                    fullName,
                    phone,
                    dob,
                    address,
                    brand: codeData.brand
                }
            })
        ]);

        return NextResponse.json({ status: "SUCCESS" }, { status: 200 });

    } catch (error: any) {
        console.error("Lỗi đăng ký:", error);
        return NextResponse.json({ status: "ERROR", message: error.message }, { status: 500 });
    }
}