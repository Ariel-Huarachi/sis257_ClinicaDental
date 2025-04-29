import { CitasServicio } from 'src/citas_servicios/entities/citas_servicio.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Pago } from 'src/pagos/entities/pago.entity';
import{
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
}from 'typeorm';
//citas(id INT, estado ENUM('Programada', 'Completada', 'Cancelada'),
//  cliente_id INT, odontologo_id INT, fecha_hora_inicio DATETIME, fecha_hora_fin DATETIME,
//  fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)
@Entity('citas')
export class Cita {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('enum', { enum: ['Programada', 'Completada', 'Cancelada'] })
    estado: string;

    @Column('integer', { name: 'cliente_id' })
    idCliente: number;

    @Column('integer', { name: 'odontologo_id' })
    idOdontologo: number;

    @Column('timestamp', { name: 'fecha_hora_inicio' })
    fechaHoraInicio: Date;

    @Column('timestamp', { name: 'fecha_hora_fin' })
    fechaHoraFin: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Paciente, paciente => paciente.citas)
    @JoinColumn({ name: 'cliente_id', referencedColumnName: 'id' })
    paciente: Paciente;

    @ManyToOne(() => Odontologo, odontologo => odontologo.citas)
    @JoinColumn({ name: 'odontologo_id', referencedColumnName: 'id' })
    odontologo: Odontologo;

    @OneToMany(() => Pago, pago => pago.cita)
    pagos: Pago[];

    @OneToMany(() => CitasServicio, citasServicio => citasServicio.cita)
        citas_servicios: CitasServicio[];


}
