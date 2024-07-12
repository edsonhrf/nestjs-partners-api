import { TicketKind } from '@prisma/client';
export declare class ReserveSpotDto {
    spots: string[];
    ticket_kind: TicketKind;
    email: string;
}
