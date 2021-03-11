package org.accademiadellevante.cameriere.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "tavolo_attivo")
public class TavoloAttivo {
    public int getId_tavolo() {
        return id_tavolo;
    }

    public void setId_tavolo(int id_tavolo) {
        this.id_tavolo = id_tavolo;
    }

    @Id
    private int id_tavolo;

    public int getId_servizio() {
        return id_servizio;
    }

    public void setId_servizio(int id_servizio) {
        this.id_servizio = id_servizio;
    }

    @Column
    private int id_servizio;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_tavolo", insertable = false, updatable = false)
    @JsonIgnore
    public Tavolo tavolo;

    @OneToOne
    @JoinColumn(name = "id_servizio", insertable = false, updatable = false)
    @JsonIgnore
    public Servizio servizio;
}

