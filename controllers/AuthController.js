import Admin from '../models/Admin.js';
import AuthService from '../services/AuthService.js';
import TockenService from '../services/tokenService.js'
import * as dotenv from 'dotenv';
dotenv.config();


class AuthController {

    async login(req,res){
        try{ 
            const {login,password} = req.body;
            const adminDate = await AuthService.login(login,password)
            const token = await TockenService.generateTocken(adminDate) 
            res.json(token)
        }
        catch (e){
            res.status(500).json(e);
        } 
    } 
 
    async getAdmin(req, res){
        try {
			const admins = await AuthService.getAll();
			res.json(admins);
		} catch (e) {
			res.status(500).json(e);
		}
    }
}

export default new AuthController();