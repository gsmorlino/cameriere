package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Servizio {

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private Date data;

    @PrePersist
    protected void onCreate() {
        data = new Date();
    }

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
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }


}
