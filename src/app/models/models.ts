export interface DomainList {
    id: number;
    mainDomain: string;
    subDomain: string;
}

export interface DomainItem {
    mainDomain: string;
    subDomains: string[];
}

export interface StudentDetails {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    address: string;
    mobile: number;
    qualification: string;
    documents: string;
    domainId: DomainList;
    password: string;
    status: string;
    profile: string;
}