package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Cameriere {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;

    @Column
    private String Nome;

    @Column
    private String Cognome;

    @OneToOne
    public Settore settore;
}
