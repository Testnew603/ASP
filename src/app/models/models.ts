export interface Domain {
    id: number;
    domain: string;
    subdomain: string;
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
    domainId: Domain;
    password: string;
    status: string;
    profile: string;
}