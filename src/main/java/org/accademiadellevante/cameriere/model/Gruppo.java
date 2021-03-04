package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Gruppo {
    @Id
    int id;

    @ManyToOne
    public Cliente cliente;

    @ManyToOne
    public Servizio servizio;
}
