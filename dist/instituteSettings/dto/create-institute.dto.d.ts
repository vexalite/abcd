export declare class SettingsDto {
    borrowingPeriod: number;
    overdueCharges: number;
    borrowingCapacity: number;
}
export declare class CreateInstituteDto {
    instituteId: string;
    employee: SettingsDto;
    student: SettingsDto;
}
