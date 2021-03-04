package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
public class Gruppo {
    @Id
    @ManyToOne
    public Cliente cliente;
    @Id
    @ManyToOne
    public Servizio servizio;
}
