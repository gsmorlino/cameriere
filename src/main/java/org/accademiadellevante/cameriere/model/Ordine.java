package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Ordine {

    @Id
    private int id;

    @Column
    private int quantita;

    @ManyToOne
    @JoinColumn(name = "id_servizio")
    public Servizio servizio;



    @ManyToOne
    @JoinColumn(name = "id_piatto")
    public Piatto piatti;

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }
}
