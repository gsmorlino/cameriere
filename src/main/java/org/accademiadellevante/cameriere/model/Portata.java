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

    @Column
    private String NomePortata;

    @OneToMany(mappedBy = "portata")
    public List<Piatto> piatti;

    public String getNomePortata() {
        return NomePortata;
    }

    public void setNomePortata(String nomePortata) {
        NomePortata = nomePortata;
    }
}
