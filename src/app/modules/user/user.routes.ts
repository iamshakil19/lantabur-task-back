import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../enums/user';


const router = express.Router();

router.post(
    '/register',
    validateRequest(UserValidation.registerZodSchema),
    UserController.createUser
);

router.get(
    '/all-users',
    auth(ENUM_USER_ROLE.USER),
    UserController.getAllUser
)


export const UserRoutes = router;
