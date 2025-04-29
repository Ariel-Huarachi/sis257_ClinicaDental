
//horarios(id INT, odontologo_id INT, fecha DATE, hora TIME,
//  estado ENUM('Disponible', 'Reservado', 'Ocupado', 'No disponible'),
//  fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)

import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import{
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
}from 'typeorm';

@Entity('horarios') 
export class Horario {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'odontologo_id' })
    idOdontologo: number;

    @Column('date', { name: 'fecha' })
    fecha: Date;

    @Column('time', { name: 'hora' })
    hora: string;

    @Column('enum', {
        name: 'estado',
        enum: ['Disponible', 'Reservado', 'Ocupado', 'No disponible'],
    })
    estado: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Odontologo, odontologo => odontologo.horarios)
    @JoinColumn({ name: 'odontologo_id', referencedColumnName: 'id' })
    odontologo: Odontologo; 

    }

