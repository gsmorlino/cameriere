package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Piatto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String NomePiatto;

    @Column
    private String Descrizione;

    @Column
    private double prezzo;

    @ManyToOne
    @JoinColumn(name = "id_portata")
    public Portata portata;

    @ManyToMany(mappedBy = "piatti")
    private List<Ingrediente> ingredienti;


    public int getId() {
        return id;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        prezzo = prezzo;
    }

    public String getNomePiatto() {
        return NomePiatto;
    }

    public void setNomePiatto(String nomePiatto) {
        NomePiatto = nomePiatto;
    }

    public String getDescrizione() {
        return Descrizione;
    }

    public void setDescrizione(String descrizione) {
        Descrizione = descrizione;
    }
}
