package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ordine {

    @Column
    private int Quantita;

    @ManyToOne
    public Servizio servizio;

    @Id
    int id;

    @ManyToOne
    public Piatto piatti;

    public int getQuantita() {
        return Quantita;
    }

    public void setQuantita(int quantita) {
        Quantita = quantita;
    }
}
