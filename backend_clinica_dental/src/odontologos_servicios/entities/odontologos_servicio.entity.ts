
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
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
}from 'typeorm'

//odontologos_servicios(id INT, odontologo_id INT, 
// servicio_id INT, fecha_creacion DATETIME,
//  fecha_modificacion DATETIME,
//  fecha_eliminacion DATETIME)


@Entity('odontologos_servicios')
export class OdontologosServicio {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'odontologo_id' })
    idOdontologo: number;

    @Column('integer', { name: 'servicio_id' })
    idServicio: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Odontologo, odontologo => odontologo.odontologosServicios)
    @JoinColumn({ name: 'odontologo_id', referencedColumnName: 'id' })
    odontologo: Odontologo;

    @ManyToOne(() => Servicio, servicio => servicio.odontologosServicios)
    @JoinColumn({ name: 'servicio_id', referencedColumnName: 'id' })
    servicio: Servicio;
}
