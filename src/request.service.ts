import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST})
export class RequestService{
    private instituteId: string;

    setInstituteId(instituteId: string){
        this.instituteId = instituteId
    }

    getInstituteID(){
        return this.instituteId
    }
}