package org.accademiadellevante.cameriere.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ricetta {

    @Id
    @ManyToOne
    public Ingrediente ingrediente;

    @Id
    @ManyToOne
    public Piatto piatto;
}
