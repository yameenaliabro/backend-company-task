import jwt, { Secret } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';


export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, SECRET_KEY as Secret, { expiresIn: '1h' });
};