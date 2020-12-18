import Axios, { AxiosResponse } from 'axios';
import { loginReducer } from '../../reducers/login.reducer';
import TUser, { TWeirdCustomer } from '../types/TUser';
import getApiHeader from '../utils/getApiHeaders';

const UserSvc = Axios.create({
    url: '',
    headers: getApiHeader
});

export default {
    getUser: async (id?: string): Promise<TUser | TWeirdCustomer> => {
        try {
            const response =
              ((await UserSvc.get) <TUser|TWeirdCustomer>(id ? "?id=" + id : "/list"));

            const data = response;

            if (data) {
                return { psycko: true, isWeirdCustomer: true } as TWeirdCustomer;
            } else {
                return { name: 'Hatshal' } as TUser;
            }
        } catch (e) {
            console.error(e);
        }
    }
};