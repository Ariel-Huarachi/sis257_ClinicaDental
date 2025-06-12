
//odontologos(id INT, nombre VARCHAR(50), primer_apellido
//  VARCHAR(50), segundo_apellido VARCHAR(50),
//  email VARCHAR(100), telefono VARCHAR(20), 
// direccion VARCHAR(255),
//  especialidad VARCHAR(100), 
// rol_id INT, fecha_creacion DATETIME, 
// fecha_modificacion DATETIME, 
// fecha_eliminacion DATETIME)
import { Cita } from 'src/citas/entities/cita.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { OdontologosServicio } from 'src/odontologos_servicios/entities/odontologos_servicio.entity';
import { Rol } from 'src/roles/entities/rol.entity';
import{
    BeforeInsert,
    BeforeUpdate,
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
import * as bcrypt from 'bcrypt';

@Entity('odontologos')
export class Odontologo {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar',{ length: 50,})
    nombre: string;

    @Column('varchar',{ length: 50, name: 'primer_apellido'})
    primerApellido: string;

    @Column('varchar',{ length: 50, name : 'segundo_apellido'})
    segundoApellido: string;

    @Column('varchar',{ length: 100,})
    email: string;

    @Column('varchar', { length: 250 })
    password: string;

    @Column('varchar',{ length: 20,})
    telefono: string;

    @Column('varchar',{ length: 255,})
    direccion: string;

    @Column('varchar',{ length: 100,})
    especialidad: string;

    @Column('integer', { name: 'rol_id', default: 2})
    idRol: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    
  //Bug correcion al actualizar, ahora se puede actualizar la contraseña
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      // Solo genera el hash si la contraseña está presente
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

   // Implementación de la validación de la contraseña
   async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.password);
  }

    @ManyToOne(() => Rol, rol => rol.odontologos)
    @JoinColumn({ name: 'rol_id', referencedColumnName: 'id' })
    rol: Rol;

    @OneToMany(() => Horario, horario => horario.odontologo)
    horarios: Horario[];

    @OneToMany(() => Cita, cita => cita.odontologo)
    citas: Cita[];
    
    @OneToMany(() => OdontologosServicio, odontologosServicio => odontologosServicio.odontologo)
    odontologosServicios: OdontologosServicio[];

   

}


