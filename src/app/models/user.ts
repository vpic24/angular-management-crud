//user interface

import { Data } from '@angular/router';

export interface User {
    id?: number;
    firstname: string;
    lastname: string;
    birth: Data;
    address: string;
    sex: string;
}