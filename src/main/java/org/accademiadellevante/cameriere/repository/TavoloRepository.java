package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TavoloRepository extends JpaRepository<Tavolo, Integer> {

}
