package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
public class Servizio {

    public int getId() {
        return id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public Date getData() {
        return Data;
    }

    public void setData(Date data) {
        Data = data;
    }

    @Column
    private Date Data;

    @ManyToOne
    public Tavolo tavolo;

    @ManyToMany
    public List<Cliente> gruppo;

    @ManyToOne
    public Cameriere cameriere;


}
