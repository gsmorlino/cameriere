package org.accademiadellevante.cameriere.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class TavoloAttivo {
    @Id
    int id;

    @OneToOne
    public Tavolo tavolo;

    @OneToOne
    public Servizio servizio;
}
