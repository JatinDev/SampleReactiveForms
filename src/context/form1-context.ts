import { createContext } from 'react';
import { UserFormModel } from '../models/userModel';

export type Form1ContextType = {
    users: UserFormModel[],
    setUsers: (user: UserFormModel[]) => void;
}

const Form1Context = createContext<Form1ContextType | null>(null);

export default Form1Context;

