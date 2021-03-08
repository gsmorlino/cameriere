package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Ordine;
import org.accademiadellevante.cameriere.model.Servizio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdineRepository extends JpaRepository<Ordine, Integer> {
    List<Ordine> getAllByS(Servizio servizio);




}
