import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

class TokenService{

    async generateTocken(login,password) {
        const load = {
            login,
            password
        }
        const Token = jwt.sign(load,process.env.SECRET_KEY,{expiresIn:"1h"})
        return{
            Token,
        }
    }
}
export default new TokenService();