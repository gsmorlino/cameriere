package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.model.Piatto;
import org.accademiadellevante.cameriere.model.Portata;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PiattoRepository extends JpaRepository<Piatto, Integer> {
    List<Piatto> getAllByPortata(Portata portata);

    default List<Piatto> getAntipasti() {
        Portata antipasti = new Portata();
        antipasti.setId(7);
        return getAllByPortata(antipasti);
    }

    default List<Piatto> getPizza(){
        Portata pizze = new Portata();
        pizze.setId(1);
        return getAllByPortata(pizze);
    }

    default List<Piatto> getDolce(){
        Portata dolci = new Portata();
        dolci.setId(5);
        return getAllByPortata(dolci);
    }

    default List<Piatto> getBevanda(){
        Portata bevande = new Portata();
        bevande.setId(6);
        return getAllByPortata(bevande);
    }
}
