//pacientes(id INT, nombre VARCHAR(50), 
// primer_apellido VARCHAR(50), segundo_apellido VARCHAR(50), 
// email VARCHAR(100), password VARCHAR(255), telefono VARCHAR(20), 
// direccion VARCHAR(255), rol_id INT, 
// fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)

import { Cita } from 'src/citas/entities/cita.entity';
import { HistorialClinico } from 'src/historial-clinico/entities/historial-clinico.entity';
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

@Entity('pacientes')
export class Paciente {
  
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar',{ length: 50,  })
    nombre: string;

    @Column('varchar',{ length: 50, name: 'primer_apellido' })
    primer_apellido: string;

    @Column('varchar',{ length: 50, name: 'segundo_apellido' })
    segundo_apellido: string;

    @Column('varchar',{ length: 100,})
    email: string;

    @Column('varchar',{ length: 255,})
    password: string;

    @Column('varchar',{ length: 20,})
    telefono: string;

    @Column('varchar',{ length: 255,})
    direccion: string;

    @Column('integer', { name: 'rol_id', default: 1 })
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


    @ManyToOne(() => Rol, rol => rol.pacientes)
    @JoinColumn({ name: 'rol_id', referencedColumnName: 'id' })
    rol: Rol;

    @OneToMany(() => Cita, cita => cita.paciente)
    citas: Cita[];

    @OneToMany(() => HistorialClinico, historialClinico => historialClinico.paciente)
    historialClinico: HistorialClinico[];

    
    







}