package org.accademiadellevante.cameriere.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ingrediente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String Allergeni;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ricetta",
            joinColumns = {
                    @JoinColumn(name = "id_ingrediente")
            },
            inverseJoinColumns = {@JoinColumn(name = "id_piatto")}
    )
    private List<Piatto> piatti;

}
