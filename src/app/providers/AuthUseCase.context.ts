import { createContext } from "react";
import type { LoginUseCase } from "../../features/auth/domain/login.usecase";
import type { RegisterUseCase } from "../../features/auth/domain/register.usecase";

export default createContext<{ loginUseCase: LoginUseCase, registerUseCase: RegisterUseCase } | null>(null)