import { createContext, type ReactNode, useEffect, useState } from "react"

import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    isLoggingOut: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

     async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
        } catch (error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    const [isLoggingOut, setIsLoggingOut] = useState(false)

    function handleLogout() {
        setIsLoggingOut(true)
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    useEffect(() => {
        if (usuario.token === '' && isLoggingOut) {
            const timer = setTimeout(() => setIsLoggingOut(false), 0)
            return () => clearTimeout(timer)
        }
    }, [usuario.token, isLoggingOut])

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, isLoggingOut }}>
            {children}
        </AuthContext.Provider>
    )
}