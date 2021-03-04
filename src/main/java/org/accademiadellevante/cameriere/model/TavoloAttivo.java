package org.accademiadellevante.cameriere.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class TavoloAttivo {
    @Id
    @OneToOne
    public Tavolo tavolo;

    @Id
    @OneToOne
    public Servizio servizio;
}
