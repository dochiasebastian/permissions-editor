import jwt, { JwtPayload } from 'jsonwebtoken';
import asyncHandler from './Async';
import ErrorResponse from '../Util/ErrorResponse';
import User from '../Model/User';

export const protect = asyncHandler(async (req: any, res: any, next: any) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try{
        const decodedToken = jwt.verify(token, "agenwmgt43809tg340jgr4ogjv0");

        req.user = await User.findById((decodedToken as JwtPayload).id);

        next();
    } catch {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
});

const authorize = (... roles: any) => {
    return (req: any, res: any, next: any) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorResponse(`User role ${req.user.role} is not authorized to access this route`, 403));
        }

        next();
    }
}

export default authorize;