import { Paciente } from 'src/pacientes/entities/paciente.entity';
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

//historial_clinico(id INT, cliente_id INT, diagnostico TEXT, 
// tratamiento_realizado TEXT, observaciones TEXT, 
// fecha_tratamiento DATE, fecha_creacion DATETIME, 
// fecha_modificacion DATETIME)


@Entity('historial_clinico')
export class HistorialClinico {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'cliente_id' })
    idCliente: number;

    @Column('text', { name: 'diagnostico' })
    diagnostico: string;

    @Column('text', { name: 'tratamiento_realizado' })
    tratamientoRealizado: string;

    @Column('text', { name: 'observaciones' })
    observaciones: string;

    @Column('date', { name: 'fecha_tratamiento' })
    fechaTratamiento: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Paciente, paciente => paciente.historialClinico)
    @JoinColumn({ name: 'cliente_id', referencedColumnName: 'id' })
    paciente: Paciente;

}
