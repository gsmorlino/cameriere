package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ordine {

    @Column
    private int Quantita;

    @Id
    @ManyToOne
    public Servizio servizio;

    @Id
    @ManyToOne
    public Piatto piatti;

    public int getQuantita() {
        return Quantita;
    }

    public void setQuantita(int quantita) {
        Quantita = quantita;
    }
}
