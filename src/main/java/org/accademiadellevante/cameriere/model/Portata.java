package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Portata {

    public int getId() {
        return id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public String getNomePortata() {
        return NomePortata;
    }

    public void setNomePortata(String nomePortata) {
        NomePortata = nomePortata;
    }

    @Column
    private String NomePortata;

    @OneToMany
    public List<Piatto> piatti;
}
