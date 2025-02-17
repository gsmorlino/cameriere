package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Tavolo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String descrizione;

    @ManyToOne
    @JoinColumn(name = "id_sala")
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

}
