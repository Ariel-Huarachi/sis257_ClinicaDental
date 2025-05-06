import { CitasServicio } from 'src/citas_servicios/entities/citas_servicio.entity';
import { OdontologosServicio } from 'src/odontologos_servicios/entities/odontologos_servicio.entity';
import{
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
}from 'typeorm';

//servicios(id INT, nombre VARCHAR(100), 
// descripcion TEXT, precio DECIMAL(10,2), 
// duracion INT, fecha_creacion DATETIME,
//  fecha_modificacion DATETIME, 
// fecha_eliminacion DATETIME)
@Entity('servicios')
export class Servicio {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar',{ length: 100,})
    nombre: string;

    @Column('text',{ nullable: true,})
    descripcion: string;

    @Column('decimal', { name: 'precio', precision: 10, scale: 2 })
    precio: number;

    @Column('integer', { name: 'duracion' })
    duracion: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false})
    fechaEliminacion: Date;

    @OneToMany(() => OdontologosServicio, odontologosServicio => odontologosServicio.servicio)
    odontologosServicios: OdontologosServicio[];

    @OneToMany(() => CitasServicio, citasServicio => citasServicio.servicio)
    citas_servicios: CitasServicio[];


}
