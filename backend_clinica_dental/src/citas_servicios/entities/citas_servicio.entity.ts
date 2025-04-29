import { Cita } from 'src/citas/entities/cita.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
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

//citas_servicios(id INT, cita_id INT, 
// servicio_id INT, precio_servicio DECIMAL(10,2), 
// fecha_creacion DATETIME, fecha_modificacion DATETIME)

@Entity('citas_servicios')
export class CitasServicio {

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'cita_id' })
    idCita: number;

    @Column('integer', { name: 'servicio_id' })
    idServicio: number;

    @Column('decimal', { name: 'precio_servicio', precision: 10, scale: 2 })
    precioServicio: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Cita, cita => cita.citas_servicios)
    @JoinColumn({ name: 'cita_id', referencedColumnName: 'id' })
    cita: Cita;

    @ManyToOne(() => Servicio, servicio => servicio.citas_servicios)
    @JoinColumn({ name: 'servicio_id', referencedColumnName: 'id' })
    servicio: Servicio;
}
