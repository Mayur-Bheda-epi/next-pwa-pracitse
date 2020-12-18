type TUser = {
    name: string;
    email: string;
    age?: number;
    addreses: TUserAddress[];
};

type TUserAddress = {
    city: string;
    state: string;
}

export type TWeirdCustomer = {
    psycko: boolean;
    isWeirdCustomer?: boolean;
};

export default TUser;