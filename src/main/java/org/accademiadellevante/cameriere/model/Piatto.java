package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Piatto {

    public int getId() {
        return id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public String getNomePiatto() {
        return NomePiatto;
    }

    public void setNomePiatto(String nomePiatto) {
        NomePiatto = nomePiatto;
    }

    public void setId(int IDPiatto) {
        this.id = IDPiatto;
    }

    @Column
    private String NomePiatto;

    public String getDescrizione() {
        return Descrizione;
    }

    public void setDescrizione(String descrizione) {
        Descrizione = descrizione;
    }

    @Column
    private String Descrizione;

    public double getPrezzo() {
        return Prezzo;
    }

    public void setPrezzo(double prezzo) {
        Prezzo = prezzo;
    }

    @Column
    private double Prezzo;

    @ManyToOne
    public Portata portate;

    @ManyToMany
    private List<Ingrediente> ingredienti;
}
