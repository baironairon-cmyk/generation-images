import { PrismaClient } from '@prisma/client';
export declare const prisma: PrismaClient<{
    log: ({
        emit: "event";
        level: "query";
    } | {
        emit: "stdout";
        level: "error";
    } | {
        emit: "stdout";
        level: "warn";
    })[];
}, "error" | "warn" | "query", import("@prisma/client/runtime/library.js").DefaultArgs>;
//# sourceMappingURL=prisma.d.ts.map