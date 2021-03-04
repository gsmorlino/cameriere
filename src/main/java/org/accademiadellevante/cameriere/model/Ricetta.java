package org.accademiadellevante.cameriere.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ricetta {

    @Id
    int id;

    @ManyToOne
    public Ingrediente ingrediente;

    @ManyToOne
    public Piatto piatto;
}
