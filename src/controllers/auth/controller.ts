import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/jwt';
import { IUser } from '../../models';
import { ApiError } from '../../helpers';
import { ExistUserProps, RegisterUserProp, UpdateUser } from './dto';

export const register = async (props: RegisterUserProp) => {
    const { email, password, username } = props;

    const existingUser = await IUser.findOne({ email });

    if (existingUser) {
        throw new ApiError(409, 'email  already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new IUser({ email, username, password: hashedPassword });
    const user = await newUser.save();

    if (!user) {
        throw new ApiError(500, 'User registration failed');
    }

    const token = generateToken(user._id);
    return { user, token };
};

export const login = async (props: ExistUserProps) => {
    const { username, password } = props;
    const user = await IUser.findOne({ username });

    if (!user) {
        throw new ApiError(401, "User Does not Exist!")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password!")
    }

    if (!user) {
        throw new ApiError(500, 'User registration failed');
    }
    const token = generateToken(user._id);
    return token
};

export const updateUser = async (_id: string, props: UpdateUser) => {
    const { username, email } = props;
    const user = await IUser.findById(_id);

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    if (email) user.email = email;
    if (username) user.username = username;

    await user.save();
    return user;
};
