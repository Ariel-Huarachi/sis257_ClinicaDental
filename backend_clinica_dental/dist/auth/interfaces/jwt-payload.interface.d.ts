export interface JwtPayload {
    sub: number;
    role: 'odontologo' | 'paciente';
}
