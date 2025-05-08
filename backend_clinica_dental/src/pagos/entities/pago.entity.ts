import { Cita } from 'src/citas/entities/cita.entity';
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
//pagos(id INT, cita_id INT, 
// monto_pagado DECIMAL(10,2), 
// metodo_pago ENUM('Efectivo', 'Tarjeta', 'QR'), 
// fecha_pago DATETIME, fecha_creacion DATETIME,
//  fecha_modificacion DATETIME)
@Entity('Pagos')
export class Pago {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('integer', { name: 'cita_id' })
    idCita: number;

    @Column('decimal', { name: 'monto_pagado', precision: 10, scale: 2 })
    montoPagado: number;

    @Column('enum', { name: 'metodo_pago', enum: ['Efectivo', 'Tarjeta', 'QR'] })
    metodoPago: string;

    @CreateDateColumn({ name: 'fecha_pago' })
    fechaPago: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @DeleteDateColumn({ name: 'fecha_eliminacion' })
    fechaEliminacion: Date;

    @ManyToOne(() => Cita, cita => cita.pagos)
    @JoinColumn({ name: 'cita_id', referencedColumnName: 'id' })
    cita: Cita;



}
