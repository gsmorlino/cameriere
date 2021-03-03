package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Conto {
    public int getId() {
        return id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public double getTotale() {
        return Totale;
    }

    public void setTotale(double totale) {
        Totale = totale;
    }

    @Column
    private double Totale;

    @OneToOne
    public Servizio servizio;
}
