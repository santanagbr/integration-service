import PersonalData from '../dto/personal.data';
import UserAddress from '../dto/address.data';

export default interface UserData extends PersonalData {
    address: UserAddress | {};
}