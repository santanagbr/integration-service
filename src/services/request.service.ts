import axios from 'axios';
import { injectable } from 'inversify';
import PersonalData from '../domain/dto/personal.data';
import UserAddress from '../domain/dto/address.data';

const http = axios.create({ baseURL: 'https://cwi-nodejs-test.herokuapp.com/' });

@injectable()
export class RequestService {
    public async getUserData(): Promise<PersonalData[]> {
        try {
            const users = await http.get('/');

            return users.data || [];
        } catch (err) {
            throw new Error(`Fail to request users: ${err.message}`)
        }
    }

    public async getUserAddress(userId: string): Promise<UserAddress> {
        try{
            const userAddress = await http.get(`${userId}/address`);
            return userAddress.data;
        } catch {
            return {};
        };

    }
}