import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();


class AuthMiddleware {
    async validate(req,res,next){
        if(req.method === "OPTIONS"){
            next();
        }
    
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "Пользователь не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            req.user = decoded
            next();
        }catch(e){
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
}

export default new AuthMiddleware();