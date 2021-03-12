package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Sala;
import org.accademiadellevante.cameriere.model.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TavoloRepository extends JpaRepository<Tavolo, Integer> {
    List<Tavolo> findAllBySala(Sala sala);

    default List<Tavolo> getSalaInterna(){
        Sala salaInterna = new Sala();
        salaInterna.setId(1);
        return findAllBySala(salaInterna);
    }

    default List<Tavolo> getSalaEsterna(){
        Sala salaEsterna = new Sala();
        salaEsterna.setId(2);
        return findAllBySala(salaEsterna);
    }

}
