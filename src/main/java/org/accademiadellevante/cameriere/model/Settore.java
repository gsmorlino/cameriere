package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Settore {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;

    @OneToOne
    public Cameriere cameriere;
}
