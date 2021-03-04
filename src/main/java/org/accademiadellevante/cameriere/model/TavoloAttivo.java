package org.accademiadellevante.cameriere.model;

import javax.persistence.*;

@Entity
@Table(name = "tavolo_attivo")
public class TavoloAttivo {
    @Id
    private int id_tavolo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_tavolo")
    public Tavolo tavolo;

    @OneToOne
    @JoinColumn(name = "id_servizio")
    public Servizio servizio;
}

