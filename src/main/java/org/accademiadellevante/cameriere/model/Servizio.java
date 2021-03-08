package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
public class Servizio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private Date Data;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "gruppo",
            joinColumns = {
                    @JoinColumn(name = "id_servizio")
            },
            inverseJoinColumns = {@JoinColumn(name = "id_cliente")}
    )
    public List<Cliente> gruppo;


    @OneToMany(mappedBy = "servizio")
    public List<Ordine> ordini;


    public int getId() {
        return id;
    }

    public Date getData() {
        return Data;
    }

    public void setData(Date data) {
        Data = data;
    }


}
