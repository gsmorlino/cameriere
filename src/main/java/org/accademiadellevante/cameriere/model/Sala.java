package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Sala {
    public int getIDSala() {
        return IDSala;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int IDSala;

    public String getNomeSala() {
        return NomeSala;
    }

    public void setNomeSala(String nomeSala) {
        NomeSala = nomeSala;
    }

    @Column
    private String NomeSala;

    @OneToMany
    public List<Tavolo> tavoli;
}
