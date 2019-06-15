import PersonalData from '../dto/personal.data';
import UserAddress from '../dto/address.data';
import UserData from '../models/user.data';
import { injectable } from 'inversify';

@injectable()
export default class UserBuilder {
    constructor() { }

    public build(personalData: PersonalData, userAddress: UserAddress): UserData {
        return ({
            ...personalData,
            address: userAddress || {},
        })
    }
}