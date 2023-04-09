import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { HttpException, HttpStatus } from '@nestjs/common'
dotenv.config()

class Jwt {
    private readonly secret = process.env.SECRETKEY

    sign(payload: any): unknown {
        return jwt.sign(payload, this.secret);
    };

    verify(token: string): unknown {
        try {
            const decode = jwt.verify(token, this.secret)
            return decode;
        } catch (error) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        }
    };
}

export default new Jwt();