package org.accademiadellevante.cameriere.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
public class Tavolo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String descrizione;

    @Column
    private int posti;

    @ManyToOne
    @JoinColumn(name = "id_sala")
    @JsonIgnoreProperties("tavoli")
    public Sala sala;

    public int getId() {
        return id;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public int getPosti() {
        return posti;
    }

    public void setPosti(int posti) {
        this.posti = posti;
    }

}
