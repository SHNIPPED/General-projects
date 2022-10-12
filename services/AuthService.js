import Admin from '../models/Admin.js';
import bcryptjs from 'bcryptjs';

class AuthService {


    async login(login, password) {
        const validlogin = await Admin.findOne({login})
        if(!validlogin){
            throw new Error(`Пользователь не найден`);
        }
        const validPassword = bcryptjs.compareSync(password, validlogin.password)
        if(!validPassword){
            throw new Error('Введен неверный пароль');
        }
        return {validlogin,validPassword}
    }



    async getAll() {
        const admins = await Admin.find();
		return admins;
	}
}

export default new AuthService();