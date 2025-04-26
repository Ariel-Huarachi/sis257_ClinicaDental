import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import{
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
}from 'typeorm';

@Entity('roles')
export class Rol {
//roles(id INT, nombre_rol VARCHAR(50), fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar',{ length: 50,})
    nombre_rol: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @OneToMany(() => Rol, (rol) => rol.odontologos)
    odontologos: Odontologo[];

    @OneToMany(() => Rol, (rol) => rol.pacientes)
    pacientes: Paciente[];

}
