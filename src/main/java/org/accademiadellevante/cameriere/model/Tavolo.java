package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Tavolo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public int getId() {
        return id;
    }
    public Boolean occupato = false;

    public String getDescrizione() {
        return Descrizione;
    }

    public void setDescrizione(String descrizione) {
        Descrizione = descrizione;
    }

    @Column
    private String Descrizione;

    @ManyToOne
    public Sala sala;
}
