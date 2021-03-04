package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Sala {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String nome;


    @OneToMany(mappedBy = "sala")
    public List<Tavolo> tavoli;


    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
