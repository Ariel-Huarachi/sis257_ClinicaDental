
//odontologos(id INT, nombre VARCHAR(50), primer_apellido
//  VARCHAR(50), segundo_apellido VARCHAR(50),
//  email VARCHAR(100), telefono VARCHAR(20), 
// direccion VARCHAR(255),
//  especialidad VARCHAR(100), 
// rol_id INT, fecha_creacion DATETIME, 
// fecha_modificacion DATETIME, 
// fecha_eliminacion DATETIME)
import { Rol } from 'src/roles/entities/rol.entity';
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

@Entity('odontologos')
export class Odontologo {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar',{ length: 50,})
    nombre: string;

    @Column('varchar',{ length: 50,})
    primer_apellido: string;

    @Column('varchar',{ length: 50,})
    segundo_apellido: string;

    @Column('varchar',{ length: 100,})
    email: string;

    @Column('varchar',{ length: 20,})
    telefono: string;

    @Column('varchar',{ length: 255,})
    direccion: string;

    @Column('varchar',{ length: 100,})
    especialidad: string;

    @Column('integer', { name: 'rol_id' })
    idRol: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Rol, rol => rol.odontologos)
    @JoinColumn({ name: 'rol_id', referencedColumnName: 'id' })
    rol: Rol;
}


