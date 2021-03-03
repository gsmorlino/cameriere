package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String Nome;

    @Column
    private String Cognome;

    @Column
    private String Cellulare;

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getCognome() {
        return Cognome;
    }

    public void setCognome(String cognome) {
        Cognome = cognome;
    }

    public String getCellulare() {
        return Cellulare;
    }

    public void setCellulare(String cellulare) {
        Cellulare = cellulare;
    }

    public int getId() {
        return id;
    }
}
