import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) // ese fecha_creacion es el nombre de la columna en la base de datos
  fechaCreacion: Date; // fechaCreacion es el nombre de la propiedad en el objeto y es una buena práctica usar camelCase

  @UpdateDateColumn({ name: 'fecha_modificacion' }) // este es el nombre de la columna en la base de datos
  fechaModificacion: Date; // fechaModificacion es el nombre de la propiedad en el objeto y es una buena práctica usar camelCase

  @DeleteDateColumn({ name: 'fecha_eliminacion' }) // este es el nombre de la columna en la base de datos
  fechaEliminacion: Date; // fechaEliminacion es el nombre de la propiedad en el objeto y es una buena práctica usar camelCase
}
