package org.accademiadellevante.cameriere.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Ordine {

    @Id
    private int id;



    @Column
    private int id_piatto;
    @Column
    private int id_servizio;

    @Column
    private int quantita;

    @ManyToOne
    @JoinColumn(name = "id_servizio", insertable = false, updatable = false)
    @JsonIgnore
    public Servizio servizio;



    @ManyToOne
    @JoinColumn(name = "id_piatto", insertable = false, updatable = false)
    @JsonIgnore
    public Piatto piatti;

    public int getQuantita() {
        return quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }

    public int getId_piatto() {
        return id_piatto;
    }

    public void setId_piatto(int id_piatto) {
        this.id_piatto = id_piatto;
    }

    public int getId_servizio() {
        return id_servizio;
    }

    public void setId_servizio(int id_servizio) {
        this.id_servizio = id_servizio;
    }
}
